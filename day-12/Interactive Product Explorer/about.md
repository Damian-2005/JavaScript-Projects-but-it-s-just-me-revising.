
I actually like this project because it's deceptively simple. Companies ask variants of it all the time because it tests how you think about state, rendering, and DOM updates.

---

# Project: Interactive Product Explorer

Imagine you're building the "Featured Products" section of an e-commerce website.

The user should be able to:

* Browse products
* Search by name
* Filter by category
* Sort products
* Switch between light and dark themes
* See some live statistics
* Enjoy small animations that make the UI feel polished

Instead of building ten tiny exercises, you're building one app that naturally requires every concept you're shaky on.

---

# The UI

Picture something like this:

```
----------------------------------------------------
Product Explorer

Search:
[________________________]

Category:
[ All ▼ ]

Sort:
( Price Low → High )
( Price High → Low )
( Rating )

Theme:
[🌞 Light] [🌙 Dark]

------------------------------------

Nike Shoes
Sports
⭐⭐⭐⭐☆
$80

------------------------------------

Monitor
Tech
⭐⭐⭐⭐⭐
$180

------------------------------------

Keyboard
Tech
⭐⭐⭐⭐☆
$40

...
```

At the bottom:

```
Products Found: 5

Average Price: $69

Most Expensive:
Monitor ($180)
```

---

# The Product Data

Start with an array like:

```js
const products = [
    {
        id: 1,
        name: "Nike Shoes",
        category: "Sports",
        price: 80,
        rating: 4.5
    },

    ...
]
```

This array is your "database."

Every time the user interacts with the page, you're simply transforming this array and displaying the result.

---

# Part 1 — Display the Products

This is where `map()` comes in.

Ask yourself:

> "How do I turn one product object into one HTML card?"

For one product:

```
Nike Shoes

Sports

⭐⭐⭐⭐☆

$80
```

Now ask:

> "How do I do this for every product?"

That's exactly what `map()` is for.

---

# Part 2 — Search

Suppose someone types:

```
mon
```

The page should instantly become

```
Monitor
```

Everything else disappears.

Questions you'll solve:

* How do I know what the user typed?
* How do I ignore uppercase/lowercase?
* How do I update the UI without refreshing the page?

Hint:

```
products
      ↓
filter()
      ↓
map()
      ↓
display
```

---

# Part 3 — Category Filter

Imagine clicking

```
Tech
```

Now only these appear:

```
Keyboard

Monitor
```

Click

```
Sports
```

Now

```
Nike Shoes

Football
```

Click

```
All
```

Everything returns.

---

Now ask yourself something interesting:

> What if the user searches **and** filters?

For example

```
Search:
mon

Category:
Tech
```

Should still show

```
Monitor
```

But

```
Search:
nike

Category:
Tech
```

Should show

```
No products found.
```

Notice something?

You aren't replacing one filter with another.

You're combining them.

---

# Part 4 — Sorting

Now imagine clicking

```
Price Low → High
```

The products rearrange.

```
Football

Backpack

Keyboard

Nike Shoes

Monitor
```

Now click

```
Rating
```

Everything rearranges again.

Same products.

Different order.

Notice:

Filtering removes products.

Sorting keeps every product.

---

# Part 5 — Live Statistics

At the bottom, build a small dashboard.

```
Products Found:
5
```

Easy enough.

Now calculate

```
Average Price
```

Don't hardcode it.

Make the computer calculate it.

Then

```
Highest Price
```

Then maybe

```
Total Value of Inventory
```

If all products were sold together:

```
$345
```

This is where `reduce()` shines.

---

# Part 6 — Theme Switcher

Add

```
🌞

🌙
```

When clicked

Everything changes.

Instead of

```
background: white;
```

you'll use

```css
--background
```

Instead of

```
color: black;
```

use

```css
--text
```

When dark mode activates, only the variables change.

Every element updates automatically.

This is why CSS variables are so powerful.

---

# Part 7 — Hover Animation

When the mouse hovers over a product

Instead of instantly jumping

```
⬜
```

It gently lifts

```
⬜
  ↑
```

using

```
transform: translateY(...)
```

and

```
transition
```

---

# Part 8 — Make It Feel Premium

Instead of

```
transition: .3s;
```

experiment with

```
ease

ease-in

ease-out

linear
```

Then try

```
cubic-bezier(...)
```

Compare how each feels. You'll notice some feel "snappy," others "bouncy," and some sluggish. That's the point: you're learning how motion changes the user's perception.

---

# Part 9 — Dataset

Suppose every category button looks like this:

```html
<button data-category="Sports">Sports</button>

<button data-category="Tech">Tech</button>

<button data-category="School">School</button>
```

Instead of writing separate event listeners or checking button text, you can attach one listener to each button and read:

```js
button.dataset.category
```

Now your code doesn't care which button was clicked. It simply asks the button, "What category do you represent?" This pattern scales much better as your app grows.

---

# Part 10 — `forEach()`

You'll likely have multiple buttons:

* All
* Tech
* Sports
* School

You'll select them all:

```js
const buttons = document.querySelectorAll(".category-btn");
```

Then attach the same click behavior to each one:

```js
buttons.forEach(button => {
    // add click listener
});
```

This is a perfect use case for `forEach()` because you're performing an action for every element, not creating a new array.

---

## Stretch Goals (if you finish early)

These aren't required, but they're great ways to deepen your understanding:

* ⭐ Add a "Clear Filters" button.
* ⭐ Highlight the active category button.
* ⭐ Show a "No products found" message when nothing matches.
* ⭐ Add a fade-in animation when the displayed products change.
* ⭐ Let users add products to a favorites list using a heart icon.
* ⭐ Add a price range slider to filter by maximum price.
* ⭐ Display star ratings visually instead of as plain numbers.

### The biggest lesson

The project isn't about memorizing `map()`, `filter()`, or `reduce()`. It's about seeing how they chain together in a real application.

A typical render flow becomes:

```text
Original Products
        ↓
Search filter (filter)
        ↓
Category filter (filter)
        ↓
Sort (sort)
        ↓
Statistics (reduce)
        ↓
Generate HTML (map)
        ↓
Insert into the page
```

Once that pipeline clicks, you'll start recognizing the same pattern in countless frontend projects.
