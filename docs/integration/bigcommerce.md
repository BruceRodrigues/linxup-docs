# BigCommerce Integration

This guide explains how the project integrates with the BigCommerce API to provide comprehensive e-commerce functionality. The integration leverages both BigCommerce's GraphQL Storefront API and REST API to deliver a seamless headless commerce experience.

## Architecture

The integration follows a layered architecture that abstracts BigCommerce's APIs behind a unified interface:

```mermaid
graph TB
    subgraph "Frontend Application"
        UI[React Components]
        Hooks[Custom Hooks]
    end

    subgraph "Commerce Layer"
        Provider[BigCommerce Provider]
        Fetcher[API Fetcher]
    end

    subgraph "API Layer"
        GraphQL[GraphQL Storefront API]
        REST[REST API]
    end

    subgraph "BigCommerce Platform"
        Store[BigCommerce Store]
        Auth[Authentication]
        Data[Product/Customer Data]
    end

    UI --> Hooks
    Hooks --> Provider
    Provider --> Fetcher
    Fetcher --> GraphQL
    Fetcher --> REST
    GraphQL --> Store
    REST --> Store
    Store --> Auth
    Store --> Data
```

## Configuration

The integration requires several environment variables to be configured:

### Required Environment Variables

```bash
# GraphQL Storefront API
BIGCOMMERCE_STOREFRONT_API_URL=https://your-store.mybigcommerce.com/graphql
BIGCOMMERCE_STOREFRONT_API_TOKEN=your_storefront_token
BIGCOMMERCE_STORE_API_STORE_HASH=your_store_hash

# REST API
BIGCOMMERCE_STORE_API_URL=https://api.bigcommerce.com/stores/your-store-hash/v3
BIGCOMMERCE_STORE_API_TOKEN=your_rest_api_token
BIGCOMMERCE_STORE_API_CLIENT_ID=your_client_id

BIGCOMMERCE_CHANNEL_ID=your_channel_id
BIGCOMMERCE_STORE_URL=https://your-store.mybigcommerce.com
BIGCOMMERCE_STORE_API_CLIENT_SECRET=your_client_secret
BIGCOMMERCE_CART_COOKIE=bc_cartId
```

## API Architecture

The integration uses a dual API approach:

```mermaid
graph LR
    subgraph "API Strategy"
        A[GraphQL Storefront API]
        B[REST API]
    end

    subgraph "Use Cases"
        C[Product Data]
        D[Cart Operations]
        E[Customer Auth]
        G[Checkout]
    end

    A --> C
    B --> D
    B --> E
    B --> G
```

### GraphQL Storefront API

- **Purpose**: Product catalog, and storefront data
- **Authentication**: Bearer token
- **Features**: Real-time product data, optimized queries

### REST API

- **Purpose**: Cart operations, checkout, and administrative operations
- **Authentication**: X-Auth-Token and X-Auth-Client headers
- **Features**: Full CRUD operations, customer data management

## Authentication Flow

The authentication system supports both guest and registered users:

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as Auth API
    participant B as BigCommerce

    U->>F: Login Request
    F->>A: Submit Credentials
    A->>B: Authenticate User
    B-->>A: Auth Response
    A-->>F: JWT Token
    F-->>U: Login Success

    Note over F: Store token in cookies
    Note over F: Update cart with customer ID
```

### Authentication Features

- **Customer Login**: Email/password authentication
- **Customer Registration**: New account creation
- **Session Management**: JWT token-based sessions
- **Cart Association**: Link guest carts to customer accounts
- **Logout**: Secure session termination

## Cart Operations

The shopping cart system provides persistent cart functionality:

```mermaid
stateDiagram-v2
    [*] --> EmptyCart
    EmptyCart --> CartWithItems: Add Item
    CartWithItems --> CartWithItems: Update Item
    CartWithItems --> CartWithItems: Remove Item
    CartWithItems --> Checkout: Proceed to Checkout
    CartWithItems --> EmptyCart: Clear Cart
    Checkout --> [*]

    state CartWithItems {
        [*] --> Loading
        Loading --> Success: API Response
        Loading --> Error: API Error
        Success --> [*]
        Error --> [*]
    }
```

### Cart Features

- **Persistent Storage**: Cart data stored in cookies
- **Guest Support**: Anonymous cart functionality
- **Customer Linking**: Associate guest carts with customer accounts
- **Real-time Updates**: Immediate UI updates on cart changes
- **Metafield Support**: Custom cart metadata

## Product Operations

Product management leverages BigCommerce's GraphQL API for optimal performance:

```mermaid
flowchart TD
    A[Product Search] --> B{Search Type}
    B -->|By slug| C[Path Lookup]
    B -->|By SKU| E[SKU Lookup]

    C --> F[GraphQL Query]
    E --> F

    F --> G[BigCommerce API]
    G --> H[Product Data]
    H --> I[Transform Data]
    I --> J[Return to UI]
```

### Product Features

- **Search**: Full-text product search
- **Filtering**: Category and attribute filtering
- **Pagination**: Efficient data loading
- **Product Details**: Complete product information
- **Variants**: Product option handling
- **Inventory**: Stock level management
