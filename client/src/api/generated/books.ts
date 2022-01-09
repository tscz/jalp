import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
import { gql } from '@apollo/client';
export type BookKeySpecifier = ('author' | 'title' | BookKeySpecifier)[];
export type BookFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('books' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	books?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Book?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookKeySpecifier | (() => undefined | BookKeySpecifier),
		fields?: BookFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;