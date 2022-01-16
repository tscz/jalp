import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A cheat sheet */
export type Cheatsheet = {
  __typename?: 'Cheatsheet';
  /** Unique id of a cheatsheet */
  id: Scalars['ID'];
  /** A title of a cheat sheet */
  title?: Maybe<Scalars['String']>;
};

/** A flashcard */
export type Flashcard = {
  __typename?: 'Flashcard';
  /** Unique id of a flashcard */
  id: Scalars['ID'];
  /** A title of a flashcard */
  title?: Maybe<Scalars['String']>;
};

/** Queries */
export type Query = {
  __typename?: 'Query';
  /** Get all cheat sheets */
  cheatsheets?: Maybe<Array<Maybe<Cheatsheet>>>;
  /** Get all flashcards */
  flashcards?: Maybe<Array<Maybe<Flashcard>>>;
};

export type GetFlashcardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFlashcardsQuery = { __typename?: 'Query', flashcards?: Array<{ __typename?: 'Flashcard', title?: string | null | undefined } | null | undefined> | null | undefined };

export type GetCheatsheetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCheatsheetsQuery = { __typename?: 'Query', cheatsheets?: Array<{ __typename?: 'Cheatsheet', title?: string | null | undefined } | null | undefined> | null | undefined };


export const GetFlashcardsDocument = gql`
    query GetFlashcards {
  flashcards {
    title
  }
}
    `;

/**
 * __useGetFlashcardsQuery__
 *
 * To run a query within a React component, call `useGetFlashcardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFlashcardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFlashcardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFlashcardsQuery(baseOptions?: Apollo.QueryHookOptions<GetFlashcardsQuery, GetFlashcardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFlashcardsQuery, GetFlashcardsQueryVariables>(GetFlashcardsDocument, options);
      }
export function useGetFlashcardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFlashcardsQuery, GetFlashcardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFlashcardsQuery, GetFlashcardsQueryVariables>(GetFlashcardsDocument, options);
        }
export type GetFlashcardsQueryHookResult = ReturnType<typeof useGetFlashcardsQuery>;
export type GetFlashcardsLazyQueryHookResult = ReturnType<typeof useGetFlashcardsLazyQuery>;
export type GetFlashcardsQueryResult = Apollo.QueryResult<GetFlashcardsQuery, GetFlashcardsQueryVariables>;
export const GetCheatsheetsDocument = gql`
    query GetCheatsheets {
  cheatsheets {
    title
  }
}
    `;

/**
 * __useGetCheatsheetsQuery__
 *
 * To run a query within a React component, call `useGetCheatsheetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCheatsheetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCheatsheetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCheatsheetsQuery(baseOptions?: Apollo.QueryHookOptions<GetCheatsheetsQuery, GetCheatsheetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCheatsheetsQuery, GetCheatsheetsQueryVariables>(GetCheatsheetsDocument, options);
      }
export function useGetCheatsheetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCheatsheetsQuery, GetCheatsheetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCheatsheetsQuery, GetCheatsheetsQueryVariables>(GetCheatsheetsDocument, options);
        }
export type GetCheatsheetsQueryHookResult = ReturnType<typeof useGetCheatsheetsQuery>;
export type GetCheatsheetsLazyQueryHookResult = ReturnType<typeof useGetCheatsheetsLazyQuery>;
export type GetCheatsheetsQueryResult = Apollo.QueryResult<GetCheatsheetsQuery, GetCheatsheetsQueryVariables>;