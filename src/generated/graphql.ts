import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type MessageModel = {
  __typename?: 'MessageModel';
  message: Scalars['String'];
  statut: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClasse: ClassesModel;
  createStudent: StudentModel;
  createUser: UserModel;
  deleteClasse: MessageModel;
  deleteOneUser: MessageModel;
  deleteStudent: MessageModel;
  login: AuthModel;
  register: AuthModel;
  updateClasse: MessageModel;
  updateStudent: MessageModel;
  updateUser: MessageModel;
};


export type MutationCreateClasseArgs = {
  classeInput: ClassesInput;
};


export type MutationCreateStudentArgs = {
  studentInput: StudentInput;
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationDeleteClasseArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOneUserArgs = {
  id: Scalars['String'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateClasseArgs = {
  classe: ClassesInput;
  id: Scalars['String'];
};


export type MutationUpdateStudentArgs = {
  id: Scalars['String'];
  student: StudentInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  user: UserInput;
};

export type Query = {
  __typename?: 'Query';
  fetchOneRole: RoleModel;
  fetchRoles: Array<RoleModel>;
  fetchUser: UserModel;
  fetchUsers: Array<UserModel>;
  findClasse: ClassesModel;
  findClasses: Array<ClassesModel>;
  findStudent: StudentModel;
  findStudents: Array<StudentModel>;
};


export type QueryFetchOneRoleArgs = {
  id: Scalars['String'];
};


export type QueryFetchUserArgs = {
  idUser: Scalars['String'];
};


export type QueryFindClasseArgs = {
  id: Scalars['String'];
};


export type QueryFindStudentArgs = {
  id: Scalars['String'];
};


export type QueryFindStudentsArgs = {
  paginated?: InputMaybe<PaginatedInput>;
};

export type RoleModel = {
  __typename?: 'RoleModel';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type AuthModel = {
  __typename?: 'authModel';
  token: Scalars['String'];
  user: UserModel;
};

export type ClassesInput = {
  code: Scalars['String'];
  nomination: Scalars['String'];
};

export type ClassesModel = {
  __typename?: 'classesModel';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nomination?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** sort oder type ! */
export enum OrderByDirection {
  Asc = 'ASC',
  Dsc = 'DSC'
}

export type OrderbyInput = {
  direction?: InputMaybe<OrderByDirection>;
  property?: InputMaybe<Scalars['String']>;
};

export type PaginatedInput = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<OrderbyInput>;
};

export type RegisterInput = {
  email: Scalars['String'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type StudentInput = {
  classe_id?: InputMaybe<Scalars['String']>;
  date_naiss: Scalars['DateTime'];
  lastname: Scalars['String'];
  matricule: Scalars['String'];
  name: Scalars['String'];
  sexe: Scalars['String'];
};

export type StudentModel = {
  __typename?: 'studentModel';
  classe_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date_naiss?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  lastname?: Maybe<Scalars['String']>;
  matricule?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sexe?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserModel = {
  __typename?: 'userModel';
  active: Scalars['Boolean'];
  date_naiss: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  name: Scalars['String'];
  profil_img: Scalars['String'];
  role: Scalars['String'];
};

export type FetchUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUsersQuery = { __typename?: 'Query', fetchUsers: Array<{ __typename?: 'userModel', id: string, name: string, lastname: string, email: string }> };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'authModel', token: string, user: { __typename?: 'userModel', name: string, lastname: string, email: string, active: boolean } } };

export type RegisterMutationVariables = Exact<{
  registerinput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'authModel', token: string, user: { __typename?: 'userModel', name: string, email: string, lastname: string, active: boolean, role: string } } };

export const FetchUsersDocument = gql`
    query fetchUsers {
  fetchUsers {
    id
    name
    lastname
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchUsersGQL extends Apollo.Query<FetchUsersQuery, FetchUsersQueryVariables> {
    override document = FetchUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation login($loginInput: loginInput!) {
  login(loginInput: $loginInput) {
    token
    user {
      name
      lastname
      email
      active
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    override document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation register($registerinput: registerInput!) {
  register(registerInput: $registerinput) {
    token
    user {
      name
      email
      lastname
      active
      role
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    override document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }