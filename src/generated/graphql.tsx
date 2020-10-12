import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  homePage?: Maybe<HomePage>;
  recipe?: Maybe<Recipe>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  recipesConnection?: Maybe<RecipeConnection>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  reviewsConnection?: Maybe<ReviewConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryRecipeArgs = {
  id: Scalars['ID'];
};


export type QueryRecipesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRecipesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryReviewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryReviewsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  weRecommend?: Maybe<Recipe>;
  topRated?: Maybe<Array<Maybe<ComponentHomepageTopRated>>>;
  mostViewed?: Maybe<Array<Maybe<ComponentHomepageMostViewed>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};


export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  number_of_servings: Scalars['Int'];
  time: Scalars['Int'];
  steps?: Maybe<Array<Maybe<ComponentStepsSteps>>>;
  ingredients?: Maybe<Array<Maybe<ComponentIngredientsIngredients>>>;
  users_permissions_user?: Maybe<UsersPermissionsUser>;
  image?: Maybe<UploadFile>;
  slug?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};


export type RecipeReviewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentStepsSteps = {
  __typename?: 'ComponentStepsSteps';
  id: Scalars['ID'];
  step: Scalars['String'];
};

export type ComponentIngredientsIngredients = {
  __typename?: 'ComponentIngredientsIngredients';
  id: Scalars['ID'];
  ingredient: Scalars['String'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  avatar?: Maybe<UploadFile>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
};


export type UsersPermissionsUserReviewsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsUserRecipesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | HomePage | UpdateHomePagePayload | DeleteHomePagePayload | Recipe | RecipeConnection | RecipeAggregator | RecipeAggregatorSum | RecipeAggregatorAvg | RecipeAggregatorMin | RecipeAggregatorMax | RecipeGroupBy | RecipeConnectionId | RecipeConnectionCreated_At | RecipeConnectionUpdated_At | RecipeConnectionName | RecipeConnectionNumber_Of_Servings | RecipeConnectionTime | RecipeConnectionUsers_Permissions_User | RecipeConnectionImage | RecipeConnectionSlug | RecipeConnectionDescription | RecipeConnectionPublished_At | CreateRecipePayload | UpdateRecipePayload | DeleteRecipePayload | Review | ReviewConnection | ReviewAggregator | ReviewAggregatorSum | ReviewAggregatorAvg | ReviewAggregatorMin | ReviewAggregatorMax | ReviewGroupBy | ReviewConnectionId | ReviewConnectionCreated_At | ReviewConnectionUpdated_At | ReviewConnectionComment | ReviewConnectionGrade | ReviewConnectionRecipe | ReviewConnectionUsers_Permissions_User | ReviewConnectionPublished_At | CreateReviewPayload | UpdateReviewPayload | DeleteReviewPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionAvatar | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentHomepageMostViewed | ComponentHomepageTopRated | ComponentIngredientsIngredients | ComponentStepsSteps;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UpdateHomePagePayload = {
  __typename?: 'updateHomePagePayload';
  homePage?: Maybe<HomePage>;
};

export type DeleteHomePagePayload = {
  __typename?: 'deleteHomePagePayload';
  homePage?: Maybe<HomePage>;
};

export type RecipeConnection = {
  __typename?: 'RecipeConnection';
  values?: Maybe<Array<Maybe<Recipe>>>;
  groupBy?: Maybe<RecipeGroupBy>;
  aggregate?: Maybe<RecipeAggregator>;
};

export type RecipeGroupBy = {
  __typename?: 'RecipeGroupBy';
  id?: Maybe<Array<Maybe<RecipeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<RecipeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<RecipeConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<RecipeConnectionName>>>;
  number_of_servings?: Maybe<Array<Maybe<RecipeConnectionNumber_Of_Servings>>>;
  time?: Maybe<Array<Maybe<RecipeConnectionTime>>>;
  users_permissions_user?: Maybe<Array<Maybe<RecipeConnectionUsers_Permissions_User>>>;
  image?: Maybe<Array<Maybe<RecipeConnectionImage>>>;
  slug?: Maybe<Array<Maybe<RecipeConnectionSlug>>>;
  description?: Maybe<Array<Maybe<RecipeConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<RecipeConnectionPublished_At>>>;
};

export type RecipeConnectionId = {
  __typename?: 'RecipeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionCreated_At = {
  __typename?: 'RecipeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionUpdated_At = {
  __typename?: 'RecipeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionName = {
  __typename?: 'RecipeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionNumber_Of_Servings = {
  __typename?: 'RecipeConnectionNumber_of_servings';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionTime = {
  __typename?: 'RecipeConnectionTime';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionUsers_Permissions_User = {
  __typename?: 'RecipeConnectionUsers_permissions_user';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionImage = {
  __typename?: 'RecipeConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionSlug = {
  __typename?: 'RecipeConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionDescription = {
  __typename?: 'RecipeConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeConnectionPublished_At = {
  __typename?: 'RecipeConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RecipeConnection>;
};

export type RecipeAggregator = {
  __typename?: 'RecipeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<RecipeAggregatorSum>;
  avg?: Maybe<RecipeAggregatorAvg>;
  min?: Maybe<RecipeAggregatorMin>;
  max?: Maybe<RecipeAggregatorMax>;
};

export type RecipeAggregatorSum = {
  __typename?: 'RecipeAggregatorSum';
  number_of_servings?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
};

export type RecipeAggregatorAvg = {
  __typename?: 'RecipeAggregatorAvg';
  number_of_servings?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
};

export type RecipeAggregatorMin = {
  __typename?: 'RecipeAggregatorMin';
  number_of_servings?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
};

export type RecipeAggregatorMax = {
  __typename?: 'RecipeAggregatorMax';
  number_of_servings?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
};

export type CreateRecipePayload = {
  __typename?: 'createRecipePayload';
  recipe?: Maybe<Recipe>;
};

export type UpdateRecipePayload = {
  __typename?: 'updateRecipePayload';
  recipe?: Maybe<Recipe>;
};

export type DeleteRecipePayload = {
  __typename?: 'deleteRecipePayload';
  recipe?: Maybe<Recipe>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  comment: Scalars['String'];
  grade?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Recipe>;
  users_permissions_user?: Maybe<UsersPermissionsUser>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  values?: Maybe<Array<Maybe<Review>>>;
  groupBy?: Maybe<ReviewGroupBy>;
  aggregate?: Maybe<ReviewAggregator>;
};

export type ReviewGroupBy = {
  __typename?: 'ReviewGroupBy';
  id?: Maybe<Array<Maybe<ReviewConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ReviewConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ReviewConnectionUpdated_At>>>;
  comment?: Maybe<Array<Maybe<ReviewConnectionComment>>>;
  grade?: Maybe<Array<Maybe<ReviewConnectionGrade>>>;
  recipe?: Maybe<Array<Maybe<ReviewConnectionRecipe>>>;
  users_permissions_user?: Maybe<Array<Maybe<ReviewConnectionUsers_Permissions_User>>>;
  published_at?: Maybe<Array<Maybe<ReviewConnectionPublished_At>>>;
};

export type ReviewConnectionId = {
  __typename?: 'ReviewConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionCreated_At = {
  __typename?: 'ReviewConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionUpdated_At = {
  __typename?: 'ReviewConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionComment = {
  __typename?: 'ReviewConnectionComment';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionGrade = {
  __typename?: 'ReviewConnectionGrade';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionRecipe = {
  __typename?: 'ReviewConnectionRecipe';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionUsers_Permissions_User = {
  __typename?: 'ReviewConnectionUsers_permissions_user';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewConnectionPublished_At = {
  __typename?: 'ReviewConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ReviewConnection>;
};

export type ReviewAggregator = {
  __typename?: 'ReviewAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ReviewAggregatorSum>;
  avg?: Maybe<ReviewAggregatorAvg>;
  min?: Maybe<ReviewAggregatorMin>;
  max?: Maybe<ReviewAggregatorMax>;
};

export type ReviewAggregatorSum = {
  __typename?: 'ReviewAggregatorSum';
  grade?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorAvg = {
  __typename?: 'ReviewAggregatorAvg';
  grade?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorMin = {
  __typename?: 'ReviewAggregatorMin';
  grade?: Maybe<Scalars['Float']>;
};

export type ReviewAggregatorMax = {
  __typename?: 'ReviewAggregatorMax';
  grade?: Maybe<Scalars['Float']>;
};

export type CreateReviewPayload = {
  __typename?: 'createReviewPayload';
  review?: Maybe<Review>;
};

export type UpdateReviewPayload = {
  __typename?: 'updateReviewPayload';
  review?: Maybe<Review>;
};

export type DeleteReviewPayload = {
  __typename?: 'deleteReviewPayload';
  review?: Maybe<Review>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  avatar?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAvatar>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionAvatar = {
  __typename?: 'UsersPermissionsUserConnectionAvatar';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentHomepageMostViewed = {
  __typename?: 'ComponentHomepageMostViewed';
  id: Scalars['ID'];
  recipe?: Maybe<Recipe>;
};

export type ComponentHomepageTopRated = {
  __typename?: 'ComponentHomepageTopRated';
  id: Scalars['ID'];
  recipe?: Maybe<Recipe>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Mutation = {
  __typename?: 'Mutation';
  updateHomePage?: Maybe<UpdateHomePagePayload>;
  deleteHomePage?: Maybe<DeleteHomePagePayload>;
  createRecipe?: Maybe<CreateRecipePayload>;
  updateRecipe?: Maybe<UpdateRecipePayload>;
  deleteRecipe?: Maybe<DeleteRecipePayload>;
  createReview?: Maybe<CreateReviewPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationUpdateHomePageArgs = {
  input?: Maybe<UpdateHomePageInput>;
};


export type MutationCreateRecipeArgs = {
  input?: Maybe<CreateRecipeInput>;
};


export type MutationUpdateRecipeArgs = {
  input?: Maybe<UpdateRecipeInput>;
};


export type MutationDeleteRecipeArgs = {
  input?: Maybe<DeleteRecipeInput>;
};


export type MutationCreateReviewArgs = {
  input?: Maybe<CreateReviewInput>;
};


export type MutationUpdateReviewArgs = {
  input?: Maybe<UpdateReviewInput>;
};


export type MutationDeleteReviewArgs = {
  input?: Maybe<DeleteReviewInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type UpdateHomePageInput = {
  data?: Maybe<EditHomePageInput>;
};

export type EditHomePageInput = {
  weRecommend?: Maybe<Scalars['ID']>;
  topRated?: Maybe<Array<Maybe<EditComponentHomepageTopRatedInput>>>;
  mostViewed?: Maybe<Array<Maybe<EditComponentHomepageMostViewedInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentHomepageTopRatedInput = {
  id?: Maybe<Scalars['ID']>;
  recipe?: Maybe<Scalars['ID']>;
};

export type EditComponentHomepageMostViewedInput = {
  id?: Maybe<Scalars['ID']>;
  recipe?: Maybe<Scalars['ID']>;
};

export type CreateRecipeInput = {
  data?: Maybe<RecipeInput>;
};

export type RecipeInput = {
  name: Scalars['String'];
  number_of_servings: Scalars['Int'];
  time: Scalars['Int'];
  steps?: Maybe<Array<ComponentStepsStepInput>>;
  ingredients?: Maybe<Array<ComponentIngredientsIngredientInput>>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentStepsStepInput = {
  step: Scalars['String'];
};

export type ComponentIngredientsIngredientInput = {
  ingredient: Scalars['String'];
};

export type UpdateRecipeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRecipeInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditRecipeInput = {
  name?: Maybe<Scalars['String']>;
  number_of_servings?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  steps?: Maybe<Array<Maybe<EditComponentStepsStepInput>>>;
  ingredients?: Maybe<Array<Maybe<EditComponentIngredientsIngredientInput>>>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Scalars['ID']>>>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentStepsStepInput = {
  id?: Maybe<Scalars['ID']>;
  step?: Maybe<Scalars['String']>;
};

export type EditComponentIngredientsIngredientInput = {
  id?: Maybe<Scalars['ID']>;
  ingredient?: Maybe<Scalars['String']>;
};

export type DeleteRecipeInput = {
  where?: Maybe<InputId>;
};

export type CreateReviewInput = {
  data?: Maybe<ReviewInput>;
};

export type ReviewInput = {
  comment: Scalars['String'];
  grade?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['ID']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateReviewInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditReviewInput>;
};

export type EditReviewInput = {
  comment?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  recipe?: Maybe<Scalars['ID']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteReviewInput = {
  where?: Maybe<InputId>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  reviews?: Maybe<Array<Maybe<Scalars['ID']>>>;
  avatar?: Maybe<Scalars['ID']>;
  recipes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  reviews?: Maybe<Array<Maybe<Scalars['ID']>>>;
  avatar?: Maybe<Scalars['ID']>;
  recipes?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type HomePageInput = {
  weRecommend?: Maybe<Scalars['ID']>;
  topRated?: Maybe<Array<ComponentHomepageTopRatedInput>>;
  mostViewed?: Maybe<Array<ComponentHomepageMostViewedInput>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentHomepageTopRatedInput = {
  recipe?: Maybe<Scalars['ID']>;
};

export type ComponentHomepageMostViewedInput = {
  recipe?: Maybe<Scalars['ID']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type FindRecipeQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type FindRecipeQuery = (
  { __typename?: 'Query' }
  & { recipes?: Maybe<Array<Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'description' | 'name' | 'number_of_servings' | 'time'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )>, reviews?: Maybe<Array<Maybe<(
      { __typename?: 'Review' }
      & Pick<Review, 'comment' | 'grade'>
      & { users_permissions_user?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'username'>
        & { avatar?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'url'>
        )> }
      )> }
    )>>>, steps?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentStepsSteps' }
      & Pick<ComponentStepsSteps, 'step'>
    )>>>, ingredients?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentIngredientsIngredients' }
      & Pick<ComponentIngredientsIngredients, 'ingredient'>
    )>>>, users_permissions_user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'username'>
      & { avatar?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )> }
  )>>> }
);

export type SearchRecipesQueryVariables = Exact<{
  searchString?: Maybe<Scalars['String']>;
}>;


export type SearchRecipesQuery = (
  { __typename?: 'Query' }
  & { recipes?: Maybe<Array<Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'name' | 'slug'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type GetHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageQuery = (
  { __typename?: 'Query' }
  & { homePage?: Maybe<(
    { __typename?: 'HomePage' }
    & { topRated?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentHomepageTopRated' }
      & { recipe?: Maybe<(
        { __typename?: 'Recipe' }
        & Pick<Recipe, 'name' | 'slug' | 'description'>
        & { ingredients?: Maybe<Array<Maybe<(
          { __typename?: 'ComponentIngredientsIngredients' }
          & Pick<ComponentIngredientsIngredients, 'ingredient'>
        )>>>, image?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'name' | 'url' | 'hash'>
        )>, users_permissions_user?: Maybe<(
          { __typename?: 'UsersPermissionsUser' }
          & Pick<UsersPermissionsUser, 'username'>
          & { avatar?: Maybe<(
            { __typename?: 'UploadFile' }
            & Pick<UploadFile, 'url'>
          )> }
        )> }
      )> }
    )>>>, mostViewed?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentHomepageMostViewed' }
      & { recipe?: Maybe<(
        { __typename?: 'Recipe' }
        & Pick<Recipe, 'name' | 'slug' | 'description'>
        & { ingredients?: Maybe<Array<Maybe<(
          { __typename?: 'ComponentIngredientsIngredients' }
          & Pick<ComponentIngredientsIngredients, 'ingredient'>
        )>>>, image?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'name' | 'url' | 'hash'>
        )>, users_permissions_user?: Maybe<(
          { __typename?: 'UsersPermissionsUser' }
          & Pick<UsersPermissionsUser, 'username'>
          & { avatar?: Maybe<(
            { __typename?: 'UploadFile' }
            & Pick<UploadFile, 'url'>
          )> }
        )> }
      )> }
    )>>>, weRecommend?: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'description' | 'name' | 'slug'>
      & { users_permissions_user?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'username' | 'updated_at'>
        & { avatar?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'url'>
        )> }
      )>, image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'name' | 'url' | 'hash'>
      )> }
    )> }
  )> }
);

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'createUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'username' | 'email'>
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  identifier: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'username' | 'email'>
    ) }
  ) }
);


export const FindRecipeDocument = gql`
    query findRecipe($slug: String!) {
  recipes(where: {slug: $slug}) {
    image {
      url
    }
    reviews {
      comment
      grade
      users_permissions_user {
        username
        avatar {
          url
        }
      }
    }
    description
    name
    number_of_servings
    time
    steps {
      step
    }
    ingredients {
      ingredient
    }
    users_permissions_user {
      username
      avatar {
        url
      }
    }
  }
}
    `;

/**
 * __useFindRecipeQuery__
 *
 * To run a query within a React component, call `useFindRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRecipeQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindRecipeQuery(baseOptions?: Apollo.QueryHookOptions<FindRecipeQuery, FindRecipeQueryVariables>) {
        return Apollo.useQuery<FindRecipeQuery, FindRecipeQueryVariables>(FindRecipeDocument, baseOptions);
      }
export function useFindRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRecipeQuery, FindRecipeQueryVariables>) {
          return Apollo.useLazyQuery<FindRecipeQuery, FindRecipeQueryVariables>(FindRecipeDocument, baseOptions);
        }
export type FindRecipeQueryHookResult = ReturnType<typeof useFindRecipeQuery>;
export type FindRecipeLazyQueryHookResult = ReturnType<typeof useFindRecipeLazyQuery>;
export type FindRecipeQueryResult = Apollo.QueryResult<FindRecipeQuery, FindRecipeQueryVariables>;
export const SearchRecipesDocument = gql`
    query searchRecipes($searchString: String) {
  recipes(where: {_q: $searchString}) {
    name
    slug
    image {
      url
    }
  }
}
    `;

/**
 * __useSearchRecipesQuery__
 *
 * To run a query within a React component, call `useSearchRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRecipesQuery({
 *   variables: {
 *      searchString: // value for 'searchString'
 *   },
 * });
 */
export function useSearchRecipesQuery(baseOptions?: Apollo.QueryHookOptions<SearchRecipesQuery, SearchRecipesQueryVariables>) {
        return Apollo.useQuery<SearchRecipesQuery, SearchRecipesQueryVariables>(SearchRecipesDocument, baseOptions);
      }
export function useSearchRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRecipesQuery, SearchRecipesQueryVariables>) {
          return Apollo.useLazyQuery<SearchRecipesQuery, SearchRecipesQueryVariables>(SearchRecipesDocument, baseOptions);
        }
export type SearchRecipesQueryHookResult = ReturnType<typeof useSearchRecipesQuery>;
export type SearchRecipesLazyQueryHookResult = ReturnType<typeof useSearchRecipesLazyQuery>;
export type SearchRecipesQueryResult = Apollo.QueryResult<SearchRecipesQuery, SearchRecipesQueryVariables>;
export const GetHomepageDocument = gql`
    query getHomepage {
  homePage {
    topRated {
      recipe {
        ingredients {
          ingredient
        }
        name
        slug
        description
        image {
          name
          url
          hash
        }
        users_permissions_user {
          username
          avatar {
            url
          }
        }
      }
    }
    mostViewed {
      recipe {
        ingredients {
          ingredient
        }
        name
        slug
        description
        image {
          name
          url
          hash
        }
        users_permissions_user {
          username
          avatar {
            url
          }
        }
      }
    }
    weRecommend {
      users_permissions_user {
        username
        updated_at
        avatar {
          url
        }
      }
      description
      name
      slug
      image {
        name
        url
        hash
      }
    }
  }
}
    `;

/**
 * __useGetHomepageQuery__
 *
 * To run a query within a React component, call `useGetHomepageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomepageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomepageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomepageQuery(baseOptions?: Apollo.QueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
        return Apollo.useQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, baseOptions);
      }
export function useGetHomepageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomepageQuery, GetHomepageQueryVariables>) {
          return Apollo.useLazyQuery<GetHomepageQuery, GetHomepageQueryVariables>(GetHomepageDocument, baseOptions);
        }
export type GetHomepageQueryHookResult = ReturnType<typeof useGetHomepageQuery>;
export type GetHomepageLazyQueryHookResult = ReturnType<typeof useGetHomepageLazyQuery>;
export type GetHomepageQueryResult = Apollo.QueryResult<GetHomepageQuery, GetHomepageQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(input: {data: {username: $username, email: $email, password: $password}}) {
    user {
      username
      email
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation login($identifier: String!, $password: String!) {
  login(input: {identifier: $identifier, password: $password}) {
    jwt
    user {
      username
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;