import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Restaurant
 *
 *
 */
export interface Restaurant extends SanityDocument {
  _type: "restaurant";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Short Description — `string`
   *
   *
   */
  short_description: string;

  /**
   * Image of the Restaurant — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Latitude of the Restaurant — `number`
   *
   *
   */
  lat?: number;

  /**
   * Longitude of the Restaurant — `number`
   *
   *
   */
  long?: number;

  /**
   * Restaurant address — `string`
   *
   *
   */
  address: string;

  /**
   * Enter a Rating from (1-5 Stars) — `number`
   *
   *
   */
  rating: number;

  /**
   * Category — `reference`
   *
   *
   */
  type: SanityReference<Category>;

  /**
   * Dishes — `array`
   *
   *
   */
  dishes?: Array<SanityKeyedReference<Dish>>;
}

/**
 * Dish
 *
 *
 */
export interface Dish extends SanityDocument {
  _type: "dish";

  /**
   * Name of dish — `string`
   *
   *
   */
  name: string;

  /**
   * Short Description — `string`
   *
   *
   */
  short_description: string;

  /**
   * Price of the dish in PKR — `number`
   *
   *
   */
  price: number;

  /**
   * Image of the Dish — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Menu Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Image of Category — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Featured Menu categories
 *
 *
 */
export interface Featured extends SanityDocument {
  _type: "featured";

  /**
   * Featured Category name — `string`
   *
   *
   */
  name: string;

  /**
   * Short Description — `string`
   *
   *
   */
  short_description: string;

  /**
   * Restaurants — `array`
   *
   *
   */
  restaurants: Array<SanityKeyedReference<Restaurant>>;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents = Restaurant | Dish | Category | Featured;
