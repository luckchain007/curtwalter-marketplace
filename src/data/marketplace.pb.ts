// Code generated by protoc-gen-js-fetch.
// DO NOT EDIT!

import * as google_protobuf_google_protobuf_timestamp from "./google/protobuf/timestamp.pb";
import * as google_protobuf_google_protobuf_field_mask from "./google/protobuf/field_mask.pb";

export type TradingType =
  | "TRANSFER"
  | "SALE"
  | "LISTING"
  | "OFFER"
  | "UNLIST"
  | "MINT";
export const TradingType_TRANSFER: TradingType = "TRANSFER";
/**
Sale with currency exchange
*/
export const TradingType_SALE: TradingType = "SALE";
/**
Free Transfer
Listing on this marketplace
*/
export const TradingType_LISTING: TradingType = "LISTING";
/**
Offer created
*/
export const TradingType_OFFER: TradingType = "OFFER";
/**
Unlisting on this marketplace
*/
export const TradingType_UNLIST: TradingType = "UNLIST";
/**
NFT just minted
*/
export const TradingType_MINT: TradingType = "MINT";

export const ALL_TradingType_VALUES: TradingType[] = [
  TradingType_TRANSFER,
  TradingType_SALE,
  TradingType_LISTING,
  TradingType_OFFER,
  TradingType_UNLIST,
  TradingType_MINT,
];

export type FilterByStatus = "BUY_NOW" | "HAS_OFFERS";
export const FilterByStatus_BUY_NOW: FilterByStatus = "BUY_NOW";
export const FilterByStatus_HAS_OFFERS: FilterByStatus = "HAS_OFFERS";

export const ALL_FilterByStatus_VALUES: FilterByStatus[] = [
  FilterByStatus_BUY_NOW,
  FilterByStatus_HAS_OFFERS,
];

export type OrderBy =
  | "PRICE_LOW_TO_HIGH"
  | "PRICE_HIGH_TO_LOW"
  | "RECENTLY_LISTED"
  | "RECENTLY_SOLD"
  | "HIGHEST_LAST_SALE"
  | "MOST_VIEWED"
  | "HIGHEST_CURRENT_OFFER";

export type ExploreCategoryOrderBy =
  | "PRICE_LOW_TO_HIGH"
  | "PRICE_HIGH_TO_LOW"
  | "RECENTLY_LISTED";


export const OrderBy_PRICE_LOW_TO_HIGH: OrderBy = "PRICE_LOW_TO_HIGH";
export const OrderBy_PRICE_HIGH_TO_LOW: OrderBy = "PRICE_HIGH_TO_LOW";
export const OrderBy_RECENTLY_LISTED: OrderBy = "RECENTLY_LISTED";
export const OrderBy_RECENTLY_SOLD: OrderBy = "RECENTLY_SOLD";
export const OrderBy_HIGHEST_LAST_SALE: OrderBy = "HIGHEST_LAST_SALE";
export const OrderBy_MOST_VIEWED: OrderBy = "MOST_VIEWED";
export const OrderBy_HIGHEST_CURRENT_OFFER: OrderBy = "HIGHEST_CURRENT_OFFER";

export const ALL_OrderBy_VALUES: OrderBy[] = [
  OrderBy_PRICE_LOW_TO_HIGH,
  OrderBy_PRICE_HIGH_TO_LOW,
  OrderBy_RECENTLY_LISTED,
  OrderBy_RECENTLY_SOLD,
  OrderBy_HIGHEST_LAST_SALE,
  OrderBy_MOST_VIEWED,
  OrderBy_HIGHEST_CURRENT_OFFER,
];

export type ResourceType = "TOKEN" | "USER" | "COLLECTION";
export const ResourceType_TOKEN: ResourceType = "TOKEN";
export const ResourceType_USER: ResourceType = "USER";
export const ResourceType_COLLECTION: ResourceType = "COLLECTION";

export const ALL_ResourceType_VALUES: ResourceType[] = [
  ResourceType_TOKEN,
  ResourceType_USER,
  ResourceType_COLLECTION,
];

export type OrderCollectionsBy = "RECENTLY_ADDED" | "VOLUME" | "DAILY_VOLUME";
/**
New Collections
*/
export const OrderCollectionsBy_RECENTLY_ADDED: OrderCollectionsBy =
  "RECENTLY_ADDED";
/**
Most Popular Collections
*/
export const OrderCollectionsBy_VOLUME: OrderCollectionsBy = "VOLUME";
/**
Hot Collections
*/
export const OrderCollectionsBy_DAILY_VOLUME: OrderCollectionsBy =
  "DAILY_VOLUME";

export const ALL_OrderCollectionsBy_VALUES: OrderCollectionsBy[] = [
  OrderCollectionsBy_RECENTLY_ADDED,
  OrderCollectionsBy_VOLUME,
  OrderCollectionsBy_DAILY_VOLUME,
];

export interface Collection {
  id?: string;
  /**
collection url slug
update_authorities can update slug
*/
  slug?: string;
  /**
description shown on the collection website
update_authorities can update description
*/
  description?: string;
  /**
readonly
*/
  authorityPubkey?: string;
  /**
Title Shown on the collection website
update_authorities can update thumbnail
*/
  title?: string;
  /**
Thumbnail image on collection website
update_authorities can update thumbnail
*/
  thumbnail?: string;
  /**
Banner image on collection website
update_authorities can update banner
*/
  banner?: string;
  /**
Links that shown on website
update_authorities can update links
*/
  links?: string[];
  /**
readonly
*/
  total_items?: number;

  totalItems?: number;
  /**
changable by only admins
*/
  verified?: boolean;
  /**
readonly
*/
  symbol?: string;
  /**
readonly
*/
  ownerCount?: number;
  /**
readonly
*/
  volume?: string | number;
  /**
Thugbirdz have multiple authorities
readonly
*/
  alternativeAuthorities?: string[];

  collaborators?: string[];
  addedAt?: google_protobuf_google_protobuf_timestamp.Timestamp;

  all_sales?: number;
}

export const Collection_id = "id";
export const Collection_slug = "slug";
export const Collection_description = "description";
export const Collection_authorityPubkey = "authority_pubkey";
export const Collection_title = "title";
export const Collection_thumbnail = "thumbnail";
export const Collection_banner = "banner";
export const Collection_links = "links";
export const Collection_totalItems = "total_items";
export const Collection_verified = "verified";
export const Collection_symbol = "symbol";
export const Collection_ownerCount = "owner_count";
export const Collection_volume = "volume";
export const Collection_alternativeAuthorities = "alternative_authorities";
export const Collection_collaborators = "collaborators";
export const Collection_addedAt = "added_at";
export interface Token {
  mintPubkey?: string;
  collectionId?: string;
  uri?: string;
  image?: string;
  metadataAddress?: string;
  metadata?: string;
  currentOwner?: string;
  addedAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  mintedAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  lastSalePrice?: string | number;
  lastSaleTime?: google_protobuf_google_protobuf_timestamp.Timestamp;
  optimizedImage?: string;
}

export const Token_mintPubkey = "mint_pubkey";
export const Token_collectionId = "collection_id";
export const Token_uri = "uri";
export const Token_image = "image";
export const Token_metadataAddress = "metadata_address";
export const Token_metadata = "metadata";
export const Token_currentOwner = "current_owner";
export const Token_addedAt = "added_at";
export const Token_mintedAt = "minted_at";
export const Token_lastSalePrice = "last_sale_price";
export const Token_lastSaleTime = "last_sale_time";
export const Token_optimizedImage = "optimized_image";
export interface Listing {
  pubkey?: string;
  mintPubkey?: string;
  ownerPubkey?: string;
  price?: string | number;
  createdAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  completedAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  isActive?: boolean;
}

export const Listing_pubkey = "pubkey";
export const Listing_mintPubkey = "mint_pubkey";
export const Listing_ownerPubkey = "owner_pubkey";
export const Listing_price = "price";
export const Listing_createdAt = "created_at";
export const Listing_completedAt = "completed_at";
export const Listing_isActive = "is_active";
export interface Offer {
  pubkey?: string;
  price?: string | number;
  mintPubkey?: string;
  fromPubkey?: string;
  createdAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  expiresAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  /**
Expired is true when offer is accepted or time is expired
*/
  isExpired?: boolean;
  acceptedBy?: string;
  acceptedAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  acceptSignature?: string;
}

export const Offer_pubkey = "pubkey";
export const Offer_price = "price";
export const Offer_mintPubkey = "mint_pubkey";
export const Offer_fromPubkey = "from_pubkey";
export const Offer_createdAt = "created_at";
export const Offer_expiresAt = "expires_at";
export const Offer_isExpired = "is_expired";
export const Offer_acceptedBy = "accepted_by";
export const Offer_acceptedAt = "accepted_at";
export const Offer_acceptSignature = "accept_signature";
export interface UserNotifications {
  disableItemsSold?: boolean;
  disableOfferAccepted?: boolean;
  disableNewOffers?: boolean;
  disableFeaturedCollections?: boolean;
  disableNewCollection?: boolean;
}

export const UserNotifications_disableItemsSold = "disable_items_sold";
export const UserNotifications_disableOfferAccepted = "disable_offer_accepted";
export const UserNotifications_disableNewOffers = "disable_new_offers";
export const UserNotifications_disableFeaturedCollections =
  "disable_featured_collections";
export const UserNotifications_disableNewCollection = "disable_new_collection";
export interface User {
  pubkey?: string;
  username?: string;
  email?: string;
  createdAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  annotations?: { [key: string]: string };
  isAdmin?: boolean;
  /**
Minimum Offer In SOL value
*/
  minimumOffer?: number;
  /**
Minimum offers by collection in SOL value
*/
  minimumCollectionOffers?: { [key: string]: number };
  notifications?: UserNotifications;
}

export const User_pubkey = "pubkey";
export const User_username = "username";
export const User_email = "email";
export const User_createdAt = "created_at";
export const User_annotations = "annotations";
export const User_isAdmin = "is_admin";
export const User_minimumOffer = "minimum_offer";
export const User_minimumCollectionOffers = "minimum_collection_offers";
export const User_notifications = "notifications";
export interface TradingHistoryItem {
  signature?: string;
  mintPubkey?: string;
  user?: string;
  userName?: string;
  tradingType?: TradingType;
  createdAt?: google_protobuf_google_protobuf_timestamp.Timestamp;
  price?: string | number;
  toPubkey?: string;
  toName?: string;
  marketplace?: string;
  escrowAccount?: string;
  program?: string;
  candyMachineId?: string;
  serviceFee?: string | number;
  image?: string;
  name?: string
}

export const TradingHistoryItem_signature = "signature";
export const TradingHistoryItem_mintPubkey = "mint_pubkey";
export const TradingHistoryItem_user = "user";
export const TradingHistoryItem_tradingType = "trading_type";
export const TradingHistoryItem_createdAt = "created_at";
export const TradingHistoryItem_price = "price";
export const TradingHistoryItem_toPubkey = "to_pubkey";
export const TradingHistoryItem_marketplace = "marketplace";
export const TradingHistoryItem_escrowAccount = "escrow_account";
export const TradingHistoryItem_program = "program";
export const TradingHistoryItem_candyMachineId = "candy_machine_id";
export const TradingHistoryItem_serviceFee = "service_fee";
export interface TokenFullInfo {
  token?: Token;
  listing?: Listing;
  owner?: User;
  collection?: Collection;
  offers?: Offer[];
  history?: TradingHistoryItem[];
}

export const TokenFullInfo_token = "token";
export const TokenFullInfo_listing = "listing";
export const TokenFullInfo_owner = "owner";
export const TokenFullInfo_collection = "collection";
export const TokenFullInfo_offers = "offers";
export const TokenFullInfo_history = "history";
export interface OfferList {
  offers?: Offer[];
}

export const OfferList_offers = "offers";
export interface TradingList {
  history?: TradingHistoryItem[];
}

export const TradingList_history = "history";
export interface TraitNumber {
  value?: string;
  amount?: number;
  floor?: string | number;
}

export const TraitNumber_value = "value";
export const TraitNumber_amount = "amount";
export const TraitNumber_floor = "floor";
export interface TraitValues {
  key?: string;
  /**
repeated string values = 2;
*/
  numbers?: TraitNumber[];
}

export const TraitValues_key = "key";
export const TraitValues_numbers = "numbers";
export interface FilterTraitValues {
  key?: string;
  values?: string[];
}

export const FilterTraitValues_key = "key";
export const FilterTraitValues_values = "values";
export interface ListCollectionReq {
  collectionId?: string;
  status?: FilterByStatus[];
  traits?: FilterTraitValues[];
  orderBy?: OrderBy;
  token?: string;
}

export const ListCollectionReq_collectionId = "collection_id";
export const ListCollectionReq_status = "status";
export const ListCollectionReq_traits = "traits";
export const ListCollectionReq_orderBy = "order_by";
export const ListCollectionReq_token = "token";
export interface CollectionFilterer {
  collectionId?: string;
  status?: FilterByStatus[];
  traits?: FilterTraitValues[];
  orderBy?: OrderBy;
  timestamp?: google_protobuf_google_protobuf_timestamp.Timestamp;
  price?: string | number;
  id?: string;
}

export const CollectionFilterer_collectionId = "collection_id";
export const CollectionFilterer_status = "status";
export const CollectionFilterer_traits = "traits";
export const CollectionFilterer_orderBy = "order_by";
export const CollectionFilterer_timestamp = "timestamp";
export const CollectionFilterer_price = "price";
export const CollectionFilterer_id = "id";
export interface TokenAPISimple {
  mintId?: string;
  title?: string;
  image?: string;
  listedForSale?: boolean;
  price?: string | number;
  offerPrice?: string | number;
  last?: string | number;
  collectionId?: string;
  saleId?: string;
}

export const TokenAPISimple_mintId = "mint_id";
export const TokenAPISimple_title = "title";
export const TokenAPISimple_image = "image";
export const TokenAPISimple_listedForSale = "listed_for_sale";
export const TokenAPISimple_price = "price";
export const TokenAPISimple_offerPrice = "offer_price";
export const TokenAPISimple_last = "last";
export const TokenAPISimple_collectionId = "collection_id";
export interface ListCollectionRes {
  tokens?: TokenAPISimple[];
  total?: number;
  nextPage?: string;
  floorPrice?: string | number;
}

export const ListCollectionRes_tokens = "tokens";
export const ListCollectionRes_total = "total";
export const ListCollectionRes_nextPage = "next_page";
export const ListCollectionRes_floorPrice = "floor_price";
export interface CollectionMeta {
  collection?: Collection;
  traits?: TraitValues[];
  floorPrice?: string | number;
}

export const CollectionMeta_collection = "collection";
export const CollectionMeta_traits = "traits";
export const CollectionMeta_floorPrice = "floor_price";
export interface GetTokenReq {
  pubkey?: string;
}

export const GetTokenReq_pubkey = "pubkey";
export interface GetCollectionReq {
  id?: string;
}

export const GetCollectionReq_id = "id";
export interface JWSReq {
  jws?: string;
}

export const JWSReq_jws = "jws";
export interface UpdateCollectionReq {
  fields?: google_protobuf_google_protobuf_field_mask.FieldMask;
  collection?: Collection;
}

export const UpdateCollectionReq_fields = "fields";
export const UpdateCollectionReq_collection = "collection";
export interface ListingReq {
  pubkey?: string;
  mintPubkey?: string;
  ownerPubkey?: string;
  price?: string | number;
  signature?: string;
}

export const ListingReq_pubkey = "pubkey";
export const ListingReq_mintPubkey = "mint_pubkey";
export const ListingReq_ownerPubkey = "owner_pubkey";
export const ListingReq_price = "price";
export const ListingReq_signature = "signature";
export interface OfferReq {
  pubkey?: string;
  mintPubkey?: string;
  ownerPubkey?: string;
  price?: string | number;
  expiresAt?: string | number;
  signature?: string;
}

export const OfferReq_pubkey = "pubkey";
export const OfferReq_mintPubkey = "mint_pubkey";
export const OfferReq_ownerPubkey = "owner_pubkey";
export const OfferReq_price = "price";
export const OfferReq_expiresAt = "expires_at";
export const OfferReq_signature = "signature";
export interface FetchTradingHistoryReq {
  id?: string;
  resourceType?: ResourceType;
  tradingTypes?: TradingType[];
  before?: google_protobuf_google_protobuf_timestamp.Timestamp;
  limit?: number;
  noForeignListing?: boolean;
}

export const FetchTradingHistoryReq_id = "id";
export const FetchTradingHistoryReq_resourceType = "resource_type";
export const FetchTradingHistoryReq_tradingTypes = "trading_types";
export const FetchTradingHistoryReq_before = "before";
export const FetchTradingHistoryReq_limit = "limit";
export const FetchTradingHistoryReq_noForeignListing = "no_foreign_listing";
export interface FilterCollectionsReq {
  orderBy?: OrderCollectionsBy;
  limit?: number;
}

export const FilterCollectionsReq_orderBy = "order_by";
export const FilterCollectionsReq_limit = "limit";
export interface FilterCollectionsRes {
  collections?: Collection[];
}

export const FilterCollectionsRes_collections = "collections";
export interface TokensAndCollections {
  tokens?: TokenAPISimple[];
  collections?: Collection[];
}

export const TokensAndCollections_tokens = "tokens";
export const TokensAndCollections_collections = "collections";
