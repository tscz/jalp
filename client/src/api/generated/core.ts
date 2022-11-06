import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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


export const GetVocabularyDocument = gql`
    query GetVocabulary {
  entries {
    id
    word
  }
}
    `;

/**
 * __useGetVocabularyQuery__
 *
 * To run a query within a React component, call `useGetVocabularyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVocabularyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVocabularyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVocabularyQuery(baseOptions?: Apollo.QueryHookOptions<GetVocabularyQuery, GetVocabularyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVocabularyQuery, GetVocabularyQueryVariables>(GetVocabularyDocument, options);
      }
export function useGetVocabularyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVocabularyQuery, GetVocabularyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVocabularyQuery, GetVocabularyQueryVariables>(GetVocabularyDocument, options);
        }
export type GetVocabularyQueryHookResult = ReturnType<typeof useGetVocabularyQuery>;
export type GetVocabularyLazyQueryHookResult = ReturnType<typeof useGetVocabularyLazyQuery>;
export type GetVocabularyQueryResult = Apollo.QueryResult<GetVocabularyQuery, GetVocabularyQueryVariables>;
export const GetFlashcardsDocument = gql`
    query GetFlashcards {
  flashcards {
    id
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
    id
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