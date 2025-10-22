# Update Product in Cart

When a user updates a product in the cart — for example, changing its quantity — the system determines which item in the BigCommerce cart should be updated and how the change affects the variant or pricing.

Each product in the cart corresponds to a line item in BigCommerce, identified by a unique `itemId`.

When the user updates a product in the cart, the system first checks whether the product type is **Service Charged per Account** or **Service Charged per Device**.

#### Service Charged per Device

To update a product, a `PUT` request is sent to the BigCommerce API: `PUT /v3/carts/${cartId}/items/${itemId}?include=line_items.physical_items.options`

The request payload includes:

- `quantity`: the new quantity for that item
- `product_id` and `variant_id`: to ensure the correct variant is being updated

#### Service Charged per Account

If the product is **Service Charged per Account**, the system must first check whether the current user already has an active subscription for that product type.

- If **no active subscription** exists and user doesn't have a product with no subscription in the cart , the system looks for the variant whose SKU ends with `-NO-ACCOUNT`, and that variant is added to the cart.
- If **no active subscription** exists and user already have a product with no subscription in the cart , the system looks for the variant whose SKU ends with `-WITH-ACCOUNT`, and that variant is added to the cart.
- If the user **already has an active subscription**, the system selects the variant whose SKU ends with `-WITH-ACCOUNT`.

#### Flow Diagram

```mermaid
flowchart TD
    A[User updates product in cart] --> B{Product type}

    %% Service Charged per Device path
    B -->|Service Charged per Device| C[Send PUT /v3/carts/cartId/items/itemId]
    C --> D[Include quantity, product_id, and variant_id]
    D --> E[Update completed]

    %% Service Charged per Account path
    B -->|Service Charged per Account| F{User has active subscription?}

    F -->|Yes| G[Use variant with SKU -WITH-ACCOUNT]
    F -->|No| H{Cart has product with -NO-ACCOUNT?}

    H -->|No| I[Use variant with SKU -NO-ACCOUNT]
    H -->|Yes| J[Use variant with SKU -WITH-ACCOUNT]

    G --> K[Add or update product in cart]
    I --> K
    J --> K

    K --> L[Recalculate cart totals]
    L --> M[Update completed]

```
