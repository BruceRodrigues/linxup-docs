# Craft CMS Integration

This guide explains how the project integrates with Craft CMS to provide content management functionality for the headless e-commerce platform. The integration leverages Craft CMS's GraphQL API to deliver dynamic content, navigation, and configuration data.

## Overview

The Craft CMS integration provides comprehensive content management capabilities with the following key features:

- **Content Management**: Dynamic content delivery for pages, products, and marketing materials
- **Navigation System**: Multi-level navigation with mega menu support
- **Global Configuration**: Centralized management of site-wide settings and variables
- **Form Integration**: HubSpot form integration with custom styling
- **Multi-Brand Support**: Brand-specific content and configuration
- **Component-Based Architecture**: Reusable content components for consistent UI

## Architecture

The integration follows a layered architecture that separates content management from presentation:

```mermaid
graph TB
    subgraph "Frontend Application"
        UI[React Components]
        Hooks[Custom Hooks]
        Context[React Context]
    end

    subgraph "Content Layer"
        Provider[CMS Provider]
        Fetcher[GraphQL Fetcher]
        Transformers[Data Transformers]
    end

    subgraph "API Layer"
        GraphQL[Craft CMS GraphQL API]
        CDN[Content CDN]
    end

    subgraph "Craft CMS Platform"
        CMS[Craft CMS Instance]
        Content[Content Entries]
        Globals[Global Variables]
        Assets[Media Assets]
    end

    UI --> Hooks
    Hooks --> Context
    Context --> Provider
    Provider --> Fetcher
    Fetcher --> Transformers
    Fetcher --> GraphQL
    GraphQL --> CMS
    CDN --> Assets
    CMS --> Content
    CMS --> Globals
```

## Configuration

The integration requires several environment variables to be configured:

### Required Environment Variables

```bash
# Craft CMS API Configuration
NEXT_PUBLIC_CMS_URL=https://your-craft-site.com/api
NEXT_PUBLIC_CMS_TOKEN=your_craft_api_token

# Brand Configuration
NEXT_PUBLIC_BRAND=linxup  # linxup, fleetsharp, motosafety

```

## Content Management System

The Craft CMS integration uses a sophisticated content structure:

```mermaid
graph TD
    subgraph "Content Structure"
        A[Global Sets]
        B[Entries]
        C[Assets]
        D[Navigation]
    end

    subgraph "Global Sets"
        E[Global Variables]
        F[E-commerce Settings]
        G[HubSpot Forms]
        H[Mega Menu]
        I[Footer]
        N[Header]
    end

    subgraph "Entry Types"
        J[Product Features]
        K[Call-to-Order Products]
        L[Page Content]
        M[Blog Posts]
    end

    A --> E
    A --> F
    A --> G
    A --> H
    A --> I
    A --> N
    B --> J
    B --> K
    B --> L
    B --> M
```

### Global Sets

- **Global Variables**: Site-wide settings like phone numbers, scripts, and contact information
- **E-commerce Settings**: Product-related configuration and tooltips
- **HubSpot Forms**: Form configuration and portal settings
- **Mega Menu**: Navigation structure with multi-column layouts
- **Footer**: Footer content, links, and social media information

## Data Flow

The content delivery follows a structured data flow:

```mermaid
sequenceDiagram
    participant U as User
    participant C as Component
    participant H as Hook
    participant A as API
    participant CMS as Craft CMS

    U->>C: Page Load
    C->>H: useCmsConfig()
    H->>A: fetchCmsConfig()
    A->>CMS: GraphQL Query
    CMS-->>A: Content Data
    A-->>H: Transformed Data
    H-->>C: CMS Config
    C-->>U: Rendered Content

    Note over A: Data transformation<br/>and caching
    Note over H: Context provider<br/>for global access
```

## Component Architecture

The Craft CMS integration uses a component-based architecture:

```mermaid
graph LR
    subgraph "CMS Components"
        A[ProductFeature]
        B[CallToOrderProduct]
        C[CustomModal]
        D[MobileSalesPhone]
        E[LinkButton]
        F[FormButton]
    end

    subgraph "Content Types"
        G[Product Content]
        H[Marketing Content]
        I[Form Content]
        J[Navigation Content]
    end

    A --> G
    B --> G
    C --> I
    D --> H
    E --> J
    F --> I
```

### Key Components

- **ProductFeature**: Displays product information with images and call-to-action buttons
- **CallToOrderProduct**: Product cards with "Call to Order" functionality
- **CustomModal**: HubSpot form integration with custom styling
- **MobileSalesPhone**: Mobile-optimized phone number display
- **LinkButton**: Navigation and action buttons
- **FormButton**: Form submission buttons with modal support

## Multi-Brand Support

The integration supports multiple brands with brand-specific content:

```mermaid
graph TD
    subgraph "Brand Configuration"
        A[Brand Detection]
        B[Query Selection]
        C[Content Filtering]
    end

    subgraph "Supported Brands"
        D[Linxup]
        E[FleetSharp]
        F[MotoSafety]
    end

    A --> B
    B --> C
    C --> D
    C --> E
    C --> F
```

### Brand-Specific Features

- **Content Queries**: Different GraphQL queries for each brand
- **Styling**: Brand-specific CSS and assets
- **Configuration**: Brand-specific global variables
- **Forms**: Brand-specific HubSpot form configurations

## API Integration

The Craft CMS integration uses GraphQL for efficient data fetching:

```mermaid
flowchart TD
    A[Component Request] --> B{Content Type}
    B -->|Global Config| C[Global Variables Query]
    B -->|Navigation| D[Navigation Query]
    B -->|Products| E[Products Query]
    B -->|Forms| F[HubSpot Integration]

    C --> G[GraphQL API]
    D --> G
    E --> G
    F --> H[HubSpot API]

    G --> I[Data Transformation]
    H --> I
    I --> J[React Context]
    J --> K[Component Rendering]
```

### GraphQL Features

- **Efficient Queries**: Only fetch required data
- **Fragments**: Reusable query fragments for common data structures
- **Type Safety**: Full TypeScript support for query responses
- **Caching**: Built-in response caching for performance

## Content Transformers

Data transformation ensures consistent data structure across components:

```mermaid
graph LR
    subgraph "Raw CMS Data"
        A[GraphQL Response]
        B[HubSpot Data]
        C[Asset URLs]
    end

    subgraph "Transformers"
        D[Global Variables]
        E[Mega Menu]
        F[Footer]
        G[Products]
        H[Forms]
    end

    subgraph "Transformed Data"
        I[TypeScript Types]
        J[Component Props]
        K[Context Values]
    end

    A --> D
    A --> E
    A --> F
    A --> G
    B --> H
    C --> I

    D --> I
    E --> J
    F --> J
    G --> K
    H --> K
```

## Form Integration

The integration includes sophisticated form handling:

```mermaid
sequenceDiagram
    participant U as User
    participant C as Component
    participant H as HubSpot
    participant CMS as Craft CMS

    U->>C: Form Interaction
    C->>CMS: Get Form Config
    CMS-->>C: Form Settings
    C->>H: Load HubSpot Script
    H-->>C: Script Loaded
    C->>H: Create Form
    H-->>C: Form Rendered
    U->>C: Submit Form
    C->>H: Form Submission
    H-->>C: Success/Error
    C-->>U: User Feedback
```

### Form Features

- **HubSpot Integration**: Seamless form creation and submission
- **Custom Styling**: Brand-specific form styling
- **Modal Support**: Popup forms for better UX
- **Tracking**: Google Analytics and conversion tracking
- **Validation**: Client and server-side validation

## Content Management

### Global Variables

Manage site-wide settings through Craft CMS:

- **Contact Information**: Phone numbers, email addresses
- **Scripts**: Analytics, tracking, and third-party scripts
- **Branding**: Logos, colors, and brand-specific settings
- **E-commerce**: Product-related tooltips and configuration

### Navigation Management

Create and manage complex navigation structures:

- **Multi-level Menus**: Nested navigation with unlimited depth
- **Mega Menus**: Multi-column navigation layouts
- **Mobile Navigation**: Responsive navigation for mobile devices
- **Call-to-Action**: Integrated CTAs within navigation

### Content Components

Reusable content components for consistent presentation:

- **Product Features**: Highlighted product information
- **Marketing Blocks**: Promotional content and banners
- **Form Components**: Contact and lead generation forms
- **Media Components**: Image galleries and video content
