# Product Details Page

The **Product Detail Page (PDP)** is the central entry point for customers to learn more about a specific product.  
It provides comprehensive information, visual representation, and purchase options to support the customer’s decision-making process.

## 🎯 Example page

![Example of a product detail page](../../static/img/product-detail-page.jpeg)

## Product Detail Page – Data Sources

The fields and configurations used on the **Product Detail Page (PDP)** are primarily managed through two systems:

- **Craft CMS**:  
  Most product-related content is maintained under the **Entries** menu, inside the **Shop Products** channel.  
  Each entry in this channel represents a product and contains fields organized across multiple tabs such as _Metadata_, _Product Listing_, _Callout_, _Additional Information_, and others.

- **BigCommerce**:  
  Product data such as pricing, variations, modifiers, and images are retrieved directly from BigCommerce.  
  These items complement or override Craft CMS content when required to ensure accurate product information and synchronization with the e-commerce catalog.

Detailed mappings between fields and their respective sources are described in the following sections.

## PDP Fields

### 1. Category

- Field: **Product Category**
- Location: _Product Listing_ tab on the product entry in Craft CMS
- Source: **Craft CMS**
- Usage: Defines the category displayed on the PDP and used for navigation, grouping, and related product logic.

### 2. Product Title

- Field: **Title**
- Location: _Metadata_ tab on the product entry in Craft CMS
- Source: **Craft CMS**
- Usage: Main product title displayed prominently at the top of the PDP and used in SEO metadata.

### 3. Rating

- Source: **ShopperApproved API**
- Usage: Displays the product’s customer rating on the PDP.
- Display Conditions:
  - The **brand** must be _Linxup_
  - The product must have at least **3 reviews**
  - The **average rating** must be **≥ 4**

### 4. Product Description

- Field: **Page Description**
- Location: _Description_ tab on the product configuration in BigCommerce
- Source: **BigCommerce**
- Usage: Main description text displayed on the PDP, providing detailed information about the product.

### 5. Images

- Sources: **Craft CMS** and **BigCommerce**
- Usage: Product images are displayed in a carousel on the PDP, combining assets from both systems.
- From **Craft CMS**:
  - Field: **Product Gallery**
  - Location: _Product Listing_ tab on the product entry
- From **BigCommerce**:
  - Tab: **Images**
  - Location: Product configuration in BigCommerce admin

### 6. Trust Banners

- Source: **Craft CMS**
- Field: **Trust Banners**
- Location: _Product Listing_ tab on the product entry
- Usage: Up to 3 images can be defined to display trust or credibility banners on the PDP.

### 7. Contract Options

- Sources: **Craft CMS** and **BigCommerce**
- From **Craft CMS**:
  - Field: **Monthly Service Type**
  - Location: _Product Listing_ tab on the product entry
  - Behavior:
    - If set to **Service Charged per device**, contract options are displayed as radio buttons.
    - If not, radio buttons are hidden and the product is treated as a single subscription fee per account.
- From **BigCommerce**:
  - Tab: **Variations**
  - Content: Defines **variant options** and their **labels**.
  - Each variant corresponds to a contract option and determines the **final product price**.

### 8. Product and Service Value

- Sources: **Craft CMS** and **BigCommerce**
- **Product Value**
  - If the **Monthly Service Type** (Craft CMS → _Product Listing_ tab) is set to **Service Charged per device**:
    - The product value is defined by the **selected contract option** (from BigCommerce → _Variations_ tab).
    - The final value is calculated by the chosen option **multiplied by the selected quantity**.
  - If the **Monthly Service Type** is set to **Service Charged per account**:
    - The product must contain **two variants** in BigCommerce:
      - **WithoutAccountServiceLevel** → Defines the price for accounts **without an existing service subscription**.
      - **WithAccountServiceLevel** → Defines the price for accounts **with an existing service subscription**.
    - To determine whether an account already has a subscription, see: **TODO** (logic to be defined).
- **Service Value**
  - Retrieved from the **Modifier Options** field.
  - Location: _Customizations_ tab in BigCommerce.
  - The service value is also **multiplied by the selected quantity**.

### 9. Features

- Source: **Craft CMS**
- Field: **Features**
- Location: _Product Listing_ tab on the product entry
- Usage: Highlights the main product features, usually presented as a list on the PDP.

### 10. Specifications

- Source: **Craft CMS**
- Field: **Specifications**
- Location: _Product Listing_ tab on the product entry
- Usage: Provides detailed technical specifications of the product, often displayed in a table format.

### 11. Frequently Bought Together

- Sources: **Craft CMS** and **BigCommerce**
- From **Craft CMS**:
  - Field: **Frequently Bought Together**
  - Location: _Callout_ tab on the product entry
  - Usage: Defines which products should be suggested together with the current product.
- From **BigCommerce**:
  - Retrieves product information for the linked product to display on the PDP.

### 12. Callout

- Source: **Craft CMS**
- Location: _Callout_ tab on the product entry
- Usage: Displays a card on the PDP with configurable content and actions.
- Fields:
  - **Callout Position** → Defines the position of the card on the page (currently **not read by the code**; reason unknown).
  - **Callout Background Color** → Sets the background color of the card.
  - **Callout Image** → Image to be displayed in the card.
  - **Callout Title** → Title text of the card.
  - **Callout Button Picker** → Determines which buttons are displayed on the card:
    - **Call to Order** → Button links to the phone number defined in _Globals → Global Variables → Sales Telephone Link_.
    - **Call XXX-XXX-XXXX** → Button displays the phone number defined in _Globals → Global Variables → Sales Phone Number_.

### 13. Additional Information

- Source: **Craft CMS**
- Location: _Additional Information_ tab on the product entry
- Usage: Displays an additional information section on the PDP only if there is content defined.
- Fields:
  - **Additional Info - Asset Title** → Title of the section; displayed only if there is a photo or video defined in **Additional Info - Photo or Video**.
  - **Additional Info - Paragraph** → Rich text field presenting additional product information.
  - **Additional Info - Resources** → List of links to other resources:
    - **Resource Name** → Link title
    - **Resource Asset** → Link URL or asset

### 14. Customer Reviews

- Source: **ShopperApproved API**
- Usage: Displays reviews left by users for the product on the PDP.
- Display Conditions:
  - At least **3 reviews** must exist for the product.
  - The **average rating** must be **≥ 4**.
- Behavior:
  - Reviews are **sorted first by rating (highest to lowest)**, then by **date**.

### 15. Addons

- Source: **Craft CMS**
- Location: _Special Product Callout_ tab on the product entry
- Usage: Displays addon products or promotions on the PDP.
- Fields:
  - **Special Product Title** → Title of the addon card.
  - **Special Product Image** → Image displayed in the addon card.
  - **Special Product Content** → Description of the addon product.
  - **Special Product Button Picker** → Determines which buttons are displayed:
    - **Learn More (DashCam)** → Hardcoded link to `/gps-trackers/fleet-dash-camera.html`.
    - **Call to Order** → Uses the link defined in _Globals → Global Variables → Sales Telephone Link_.

### 16. Other Devices

- Sources: **Craft CMS** and **BigCommerce**
- From **Craft CMS**:
  - Location: _Other Devices_ tab on the product entry
  - Usage: Defines up to **3 products** to be suggested as additional devices on the PDP.
- From **BigCommerce**:
  - Retrieves product information (title, images, price, etc.) for each linked product to display in the cards.

### 17. Product FAQs

- Source: **Craft CMS**
- Location: _FAQs_ tab on the product entry
- Usage: Displays a FAQ section on the PDP according to the content defined in Craft CMS.
- Fields:
  - **FAQ Title** → Title of the FAQ section.
  - **FAQ Items** → List of questions and answers, displayed as a collapsible list.
  - **FAQ Paragraph** → Optional rich text paragraph for additional information.
  - **FAQ Button Picker** → Determines if the **Ask a Question** button is displayed, linking to `/contact.html`.

### 18. Footer Banner

- Source: **Craft CMS**
- Location: _Banner_ tab on the product entry
- Usage: Displays a banner above the page footer on the PDP with configurable content and buttons.
- Fields:
  - **Banner Background Image** → Image to be used as the banner background.
  - **Banner Title** → Title text of the banner.
  - **Banner Paragraph** → Content of the banner.
  - **Banner Button Picker** → Determines which buttons are displayed:
    - **View Asset Trackers & Pricing** → Links to `/gps-trackers/asset-tracking-software-device.html`.
    - **View Vehicle Trackers & Pricing** → Links to `/gps-trackers/vehicle-tracking-device.html`.
    - **Call for Special Fleet Pricing** → Uses phone link defined in _Globals → Global Variables → Sales Telephone Link_.
    - **Call to Order** → Uses phone link defined in _Globals → Global Variables → Sales Telephone Link_.
    - **Request Information** → Links to `/contact-us`.
    - **Call XXX-XXX-XXXX** → Displays the phone number defined in _Globals → Global Variables → Sales Phone Number_.

### 19. Visible on the Shopping Cart Page

- Source: **Craft CMS**
- Location: _Metadata_ tab on the product entry
- Usage: Determines whether the product can be displayed in the **You may also want** card on the shopping cart page.
- Behavior:
  - If enabled, the product is eligible to appear as a **You may also want** in the cart.
  - If disabled, the product will not be included in the related products section.

## 📊 SEO e Performance

### Meta Tags

### 20. Headless Robots

- Source: **Craft CMS**
- Location: _Metadata_ tab on the product entry
- Usage: Defines the value of the `<meta name="robots" />` tag for the PDP.
- Behavior:
  - If the field is set to **All**, the tag is rendered as:
    ```html
    <meta name="googlebot" content="all" />
    ```
  - If the field is set to **Noindex, Nofollow**, the tag is rendered as:
    ```html
    <meta name="googlebot" content="noindex, nofollow" />
    ```

### 21. Schema

- Source: **Craft CMS**
- Location: _Metadata_ tab on the product entry
- Usage: Defines the JSON-LD schema markup that will be embedded in the PDP for SEO and structured data.
- Behavior:
  - The field content is injected inside a `<script type="application/ld+json">` block.
  - Example output:
    ```html
    <script type="application/ld+json">
      { ...content from Schema field... }
    </script>
    ```
