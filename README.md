If you mean you want a **README.md prompt/content for Claude** so Claude can build the SOLEVA project according to the README, use this:

# SOLEVA — Premium Sneaker E-Commerce Website

## Project Overview

SOLEVA is a modern and premium e-commerce website for a fictional sneaker brand.

The website is inspired by the **clean, bold, and minimalist visual style of premium sportswear brands such as Nike and Adidas**, while using completely original SOLEVA branding, product names, content, and visuals.

The goal is to create a realistic commercial sneaker website rather than a basic student landing page.

---

## Brand

**Brand Name:** SOLEVA

**Tagline:**

> BUILT TO MOVE.

**Brand Description:**

SOLEVA creates modern sneakers designed for people who never stop moving. The brand combines performance-inspired technology, everyday comfort, and contemporary streetwear design.

### Brand Personality

* Bold
* Modern
* Minimal
* Sporty
* Premium
* Confident
* Innovative

---

# Website Goals

The website should:

* Showcase SOLEVA sneakers
* Allow users to browse products
* Allow users to filter products
* Allow users to view product details
* Allow users to add products to a shopping cart
* Provide customer support information
* Show physical store locations
* Provide a contact form
* Provide a newsletter subscription
* Work properly on desktop, tablet, and mobile

---

# Website Pages / Sections

## 1. Home

Create a large hero section.

### Hero

**Heading:**

> BUILT TO MOVE.

**Description:**

> Performance-inspired sneakers designed for everyday movement.

### Buttons

* SHOP NOW
* EXPLORE COLLECTION

The hero should feature a large sneaker image and strong typography.

---

## 2. About

### Heading

> MADE FOR EVERY STEP.

### Description

> SOLEVA was created for people who never stop moving. We combine modern design, everyday comfort and performance-inspired technology to create sneakers made for real life.

### Brand Features

#### PERFORMANCE

Designed with movement and comfort in mind.

#### COMFORT

Engineered for all-day wear.

#### STYLE

Minimal design built to stand out.

---

# 3. Products

Create a product catalogue containing fictional SOLEVA products.

### Products

1. SOLEVA Air Motion
2. SOLEVA Velocity X
3. SOLEVA Street Pro
4. SOLEVA Sprint One
5. SOLEVA Urban Flex
6. SOLEVA Core Runner
7. SOLEVA Elevate
8. SOLEVA Aero Max

### Categories

* All
* Running
* Lifestyle
* Training
* Basketball

### Product Card

Every product card should display:

* Product image
* Product name
* Category
* Price
* Rating
* Available colors
* Favourite button
* View Product button
* Add to Cart button

---

# 4. Product Details

When a user selects a product, display a product detail modal or dedicated product page.

Include:

* Large product image
* Product name
* Product description
* Price
* Rating
* Available colours
* Shoe size selection
* Quantity selector
* Add to Cart button

---

# 5. Shopping Cart

Implement a functional shopping cart.

Users should be able to:

* Add products
* Remove products
* Increase quantity
* Decrease quantity
* View subtotal
* View total items
* Clear cart

The cart should appear as a slide-out drawer from the right side.

The cart icon should display the current number of items.

Use `localStorage` so the cart remains after refreshing the page.

---

# 6. Customer Service

### Heading

> HOW CAN WE HELP?

Create an FAQ accordion.

### FAQ

**How long does delivery take?**

Orders typically arrive within 3–5 business days.

**Can I return my shoes?**

Yes. Eligible products can be returned according to our return policy.

**How can I track my order?**

Use your order tracking information provided after your purchase.

**What payment methods are available?**

Customers can use major online payment methods supported by the store.

**How do I choose my shoe size?**

Refer to the SOLEVA size guide before purchasing.

---

## Customer Support

**Email:**
[support@soleva.com](mailto:support@soleva.com)

**Phone:**
+60 3-1234 5678

**Opening Hours:**
Monday – Friday
9:00 AM – 6:00 PM

Button:

> CONTACT SUPPORT

---

# 7. Locations

### Heading

> FIND US.

Display fictional SOLEVA stores in Malaysia.

### Kuala Lumpur

Pavilion Kuala Lumpur
Bukit Bintang, Kuala Lumpur

### Selangor

1 Utama Shopping Centre
Petaling Jaya, Selangor

### Penang

Gurney Plaza
George Town, Penang

### Johor

Mid Valley Southkey
Johor Bahru, Johor

Each location should include:

* Store name
* Address
* Opening hours
* GET DIRECTIONS button

Include a map-style section.

---

# 8. Contact Us

Create a professional contact form.

### Fields

* Full Name
* Email
* Phone Number
* Subject
* Message

### Button

> SEND MESSAGE

Display:

**Email:**
[hello@soleva.com](mailto:hello@soleva.com)

**Phone:**
+60 3-1234 5678

Social media:

* Instagram
* TikTok
* Facebook

Add basic form validation and show a success message after submission.

---

# Navigation

Create a sticky navigation bar.

### Logo

SOLEVA

### Navigation

* HOME
* ABOUT
* PRODUCTS
* CUSTOMER SERVICE
* LOCATION
* CONTACT

### Actions

* Search
* Favourite
* Shopping Bag

The navigation should change subtly when the user scrolls.

On mobile, use a hamburger menu.

---

# Footer

Create a premium multi-column footer.

### SOLEVA

> BUILT TO MOVE.

### Navigation

* Home
* About
* Products
* Customer Service
* Location
* Contact

### Customer Service

* FAQ
* Shipping
* Returns
* Order Tracking

### Newsletter

> GET THE LATEST FROM SOLEVA.

Email placeholder:

> Enter your email

Button:

> SUBSCRIBE

### Bottom

© 2026 SOLEVA. All Rights Reserved.

* Privacy Policy
* Terms & Conditions

---

# Design System

## Colors

Primary:

`#111111`

Background:

`#FFFFFF`

Secondary background:

`#F5F5F5`

Border:

`#E5E5E5`

Muted text:

`#666666`

Use a mostly monochromatic colour palette.

Avoid excessive colours.

---

# Typography

Use a modern sans-serif font.

Headings should be:

* Large
* Bold
* Strong
* Modern
* Uppercase where appropriate

Example:

```text
BUILT
TO
MOVE.
```

Body text should remain clean and readable.

---

# Visual Direction

The website should have the visual quality of a premium sportswear brand.

### Use

* Large product photography
* Editorial-style layouts
* Bold typography
* Generous whitespace
* Full-width sections
* Minimal UI
* Clean product cards
* Subtle borders
* Smooth transitions
* High-quality imagery

### Avoid

* Excessive gradients
* Excessive shadows
* Too many colours
* Cluttered layouts
* Generic Bootstrap-looking layouts
* Cheap-looking UI
* Overly complicated animations

---

# Animations

Implement subtle animations such as:

* Hero entrance animation
* Fade-in sections
* Product hover effects
* Image zoom
* Button hover
* Smooth scrolling
* FAQ accordion animation
* Cart drawer animation
* Mobile menu animation

Animations should be smooth and professional.

Do not over-animate the website.

---

# Responsive Design

The website must work correctly on:

* Desktop
* Laptop
* Tablet
* Mobile

Pay special attention to:

* Navigation
* Hero section
* Product grid
* Product cards
* Product modal
* Cart drawer
* Contact form
* Location cards
* Footer

---

# Technical Requirements

If an existing project already exists:

1. Inspect the existing project first.
2. Identify the current framework and structure.
3. Reuse the existing technology where possible.
4. Do not unnecessarily rewrite the entire project.
5. Preserve existing functionality unless it needs to be changed.

If starting from scratch, use a suitable modern frontend stack.

Keep the code:

* Clean
* Modular
* Maintainable
* Semantic
* Responsive
* Accessible

Use reusable components where appropriate.

---

# Images

Use high-quality sneaker/product photography.

If real product images are unavailable, use suitable placeholder images.

Do NOT use:

* Nike logos
* Adidas logos
* Nike product assets
* Adidas product assets
* Copyrighted brand advertisements

All branding should belong to the fictional SOLEVA brand.

---

# Functional Requirements

Before completing the project, verify that:

* Navigation works
* Mobile menu works
* Product filtering works
* Product details work
* Add to Cart works
* Remove from Cart works
* Quantity controls work
* Cart total updates correctly
* localStorage works
* FAQ accordion works
* Contact form validation works
* Newsletter form works
* Buttons work
* Responsive layout works
* No major console errors exist

---

# Development Instructions for Claude

You are the developer responsible for implementing this project.

Do NOT only explain what should be built.

Actually inspect the project and **build the complete working website**.

Before making changes:

1. Inspect the project files.
2. Understand the existing architecture.
3. Identify the framework and dependencies.
4. Determine how the current application works.
5. Then implement SOLEVA.

After implementation:

1. Run the project.
2. Check for errors.
3. Fix build errors.
4. Fix console errors.
5. Test desktop responsiveness.
6. Test mobile responsiveness.
7. Test product filtering.
8. Test product modal.
9. Test shopping cart.
10. Test navigation.
11. Test forms.

The final website should look like a **professional commercial sneaker e-commerce website**, not a simple template or basic university project.

Prioritize **visual quality, UX, responsiveness, performance, and functionality**.

If you're putting this directly into a Claude Code project, I can also make you a **much more powerful `README.md` specifically formatted as a Claude Code development specification**, including the **tech stack, folder structure, database, authentication, checkout, admin dashboard, and deployment instructions**.
