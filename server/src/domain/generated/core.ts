import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Category of a dictionary entry */
export enum Category {
  /** Adjective */
  Adjective = 'ADJECTIVE',
  /** "Adverb" */
  Adverb = 'ADVERB',
  /** "Auxiliary Verb" */
  AuxiliaryVerb = 'AUXILIARY_VERB',
  /** "Dependent Noun" */
  DependentNoun = 'DEPENDENT_NOUN',
  /** "Determiner" */
  Determiner = 'DETERMINER',
  /** "Interjection" */
  Interjection = 'INTERJECTION',
  /** "Noun" */
  Noun = 'NOUN',
  /** "Numeral" */
  Numeral = 'NUMERAL',
  /** "Pronoun" */
  Pronoun = 'PRONOUN',
  /** "Proper Noun" */
  ProperNoun = 'PROPER_NOUN',
  /** "Unknown" */
  Unknown = 'UNKNOWN',
  /** "Verb" */
  Verb = 'VERB'
}

/** A cheat sheet */
export type Cheatsheet = {
  __typename?: 'Cheatsheet';
  /** Unique id of a cheatsheet */
  id: Scalars['ID'];
  /** A title of a cheat sheet */
  title?: Maybe<Scalars['String']>;
};

/** Difficulty of a dictionary entry */
export enum Difficulty {
  /** Easy */
  Easy = 'EASY',
  /** Hard */
  Hard = 'HARD',
  /** Medium */
  Medium = 'MEDIUM'
}

/** A dictionary Entry */
export type Entry = {
  __typename?: 'Entry';
  /** The translation for the word */
  category?: Maybe<Category>;
  /** The difficulty rank */
  difficulty?: Maybe<Difficulty>;
  /** Usage Examples */
  examples?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The explanation */
  explanations?: Maybe<Scalars['String']>;
  /** The frequency rank */
  frequencyRank?: Maybe<Scalars['Int']>;
  /** Unique id of an entry */
  id: Scalars['ID'];
  /** The translation */
  translation?: Maybe<Scalars['String']>;
  /** The word defining this entry */
  word?: Maybe<Scalars['String']>;
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
  /** Get all vocabulary entries */
  entries?: Maybe<Array<Maybe<Entry>>>;
  /** Get all flashcards */
  flashcards?: Maybe<Array<Maybe<Flashcard>>>;
};

export type GetVocabularyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVocabularyQuery = { __typename?: 'Query', entries?: Array<{ __typename?: 'Entry', id: string, word?: string | null } | null> | null };

export type GetFlashcardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFlashcardsQuery = { __typename?: 'Query', flashcards?: Array<{ __typename?: 'Flashcard', id: string, title?: string | null } | null> | null };

export type GetCheatsheetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCheatsheetsQuery = { __typename?: 'Query', cheatsheets?: Array<{ __typename?: 'Cheatsheet', id: string, title?: string | null } | null> | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: Category;
  Cheatsheet: ResolverTypeWrapper<Cheatsheet>;
  Difficulty: Difficulty;
  Entry: ResolverTypeWrapper<Entry>;
  Flashcard: ResolverTypeWrapper<Flashcard>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Cheatsheet: Cheatsheet;
  Entry: Entry;
  Flashcard: Flashcard;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
};

export type CheatsheetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cheatsheet'] = ResolversParentTypes['Cheatsheet']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['Difficulty']>, ParentType, ContextType>;
  examples?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  explanations?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frequencyRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  translation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  word?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlashcardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flashcard'] = ResolversParentTypes['Flashcard']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cheatsheets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cheatsheet']>>>, ParentType, ContextType>;
  entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entry']>>>, ParentType, ContextType>;
  flashcards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Flashcard']>>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cheatsheet?: CheatsheetResolvers<ContextType>;
  Entry?: EntryResolvers<ContextType>;
  Flashcard?: FlashcardResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

