# Footer

The **Footer** component appears at the bottom of every page and provides consistent access to important links, branding, and contact information.  
It is divided into structured sections that can include the logo, customer links, support links, and legal information.  
All content and links are managed via **Craft CMS** and configured in the **Global Variables** under the **mm_footer** settings.

## 🎯 Example Component

![Example of header component](../../static/img/footer.jpeg)

## Footer Fields

### 1. Logo

- **Field:** Footer Logo
- **Location:** _First Row_ tab in **mm_footer** under **Global Variables** in Craft CMS
- **Source:** **Craft CMS**
- **Usage:** Defines the logo displayed in the footer, typically representing the company brand.

### 2. Customer Links

- **Field:** Footer Customer Links
- **Location:** _First Row_ tab in **mm_footer** under **Global Variables** in Craft CMS
- **Source:** **Craft CMS**
- **Usage:** Defines customer-facing links displayed in the footer. Each link references a **Navigation** entry, which specifies the link text, URL, and grouping.

### 3. Footer Navigation

- **Field:** Navigation Columns
- **Location:** _Navigation_ tab in **mm_footer** under **Global Variables** in Craft CMS
- **Source:** **Craft CMS**
- **Usage:** Defines the columns and links displayed in the footer. Each column references a **Navigation** entry, where individual links and their hierarchy are configured.

### 4. Social Items

- **Field:** Social Items
- **Location:** _Bottom Row_ tab in **mm_footer** under **Global Variables** in Craft CMS
- **Source:** **Craft CMS**
- **Usage:** Defines social media icons and their corresponding links displayed in the footer. Each item includes an image and a target URL.

### 5. Sales Number

- **Field:** Sales Phone Number
- **Location:** _Globals → Global Variables → Sales Phone Number_ in Craft CMS
- **Source:** **Craft CMS**
- **Usage:** Displays the sales contact number in the footer, allowing users to quickly reach the sales team.
