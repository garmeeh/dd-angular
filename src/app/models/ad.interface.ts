// demo of some interfaces
export interface SectionView {
  name?: string,
  description?: string,
  id?: number,
  displayName?: string,
  subdomain?: string,
  containsSubsections?: boolean,
  title?: string,
}

export interface ConversationView {
  userId?: number,
  conversationId?: number,
}

export interface AdAttributeView {
  name: string,
  value: string,
  displayName: string,
}

export interface BuyerTipsView {
  values: string[],
  title: string,
}

export interface XitiAdData {
  countyId: number,
  topSectionName: string,
  xtn2: number,
}

export interface ListItem {
  title?: string,
  body?: string,
  icon?: string,
}

export interface TitleGroup {
  title?: string,
  icon?: string,
  subtitle?: string,
}

export interface TextBlock {
  text2?: string,
  text?: string,
  title?: string,
}

export interface ListBlock {
  extraInfo?: TextBlock,
  items: ListItem[],
}

export interface InfoLink {
  external?: boolean,
  text?: string,
  url?: string,
}

export interface GreenlightView {
  titleGroup: TitleGroup,
  listBlock?: ListBlock,
  infoLink?: InfoLink,
}

export interface PhotoView {
  sortOrder?: number,
  id?: number,
  small?: string,
  small2?: string,
  medium: string,
  large?: string,
}

export interface UserVerification {
  allowedAccess?: boolean,
  email?: boolean,
  phone?: boolean,
}

export interface UserSummary {
  registrationDate?: string,
  adCount?: number,
  county?: string,
  countyTown?: string,
  otherAds?: boolean,
  type?: string,
  name?: string,
  verification?: UserVerification,
  id: number,
}

export interface NativeAdParameters {
  logo?: string,
  title?: string,
  button1Text?: string,
  button1Url?: string,
  button2Text?: string,
  button2Url?: string,
  background?: string,
  searchListingSubheader?: string,
  subtitle?: string,
  externalUrl?: string,
}

export interface MotorDealerView {
  name: string,
  description: string,
  id: number,
  websiteURL?: string,
  openingHours?: string,
  longitude?: number,
  latitude?: number,
  establishedYear?: number,
  logo?: object,
  showroomUrl?: string,
  seoDescription?: string,
  seoTitle?: string,
  encryptedPhone?: string,
  franchiseType?: string,
  enhancedAddress: any,
  enhancedOpeningHours: any,
  otherAds?: boolean,
  totalAds?: number,
  forecourtPhoto?: boolean,
  showMiniShowroom?: boolean,
  showEnquiryFormTradeIn?: boolean,
  showDealerCard?: boolean,
  type: string,
  address?: string,
  closedNow?: boolean,
}

export interface AdSummary {
  section: SectionView,
  photos?: PhotoView[],
  id: number,
  campaign?: number,
  friendlyUrl?: string,
  seller?: UserSummary,
  youTubeVideoId?: string, 
  spotlight?: boolean,
  nativeAdParameters?: NativeAdParameters,
  age?: string,
  keyInfo?: any,
  specialOffer?: string,
  merits?: object,
  userSaved?: boolean,
  dealer?: MotorDealerView,
  mediaCount?: number,
  logo?: string,
  newCar?: boolean,
  greenlightVerified?: boolean,
  year?: string,
  state?: string,
  description?: string,
  header: string,
  county: string,
  price: string,
  wanted: boolean,
  currency: string
}

export interface Ad {
  state?: string,
  countyTown: string,
  emailResponse: boolean,
  views?: number,
  traderName?: string,
  traderAddress?: string,
  traderVatnumber?: string,
  publisherName: string,
  youTubeVideoId?: string,
  phoneResponse: boolean,
  conversation?: ConversationView,
  publisherPhoneEnc: string,
  breadcrumbs: SectionView[],
  displayAttributes: AdAttributeView[],
  buyerTips?: BuyerTipsView,
  xitiAdData?: XitiAdData,
  relatedAds: AdSummary[],
  myWheelsLookupLink?: string,
  greenlight: GreenlightView,
  id: number,
  section: SectionView,
  photos?: PhotoView[],
  greenlightVerified?: boolean,
  age?: string,
  spotlight?: boolean,
  seller?: UserSummary,
  newCar: boolean,
  friendlyUrl?: string,
  campaign?: number,
  year?: string,
  nativeAdParameters?: NativeAdParameters,
  userSaved?: boolean,
  merits?: object,
  specialOffer?: string,
  keyInfo: string[],
  mediaCount?: number,
  logo?: string,
  dealer?: MotorDealerView,
  price: string,
  county: string,
  header: string,
  wanted: boolean,
  description: string,
  currency: string,
};