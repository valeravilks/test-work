# Slider Testimonials

<b>Component Name:</b> Slider Testimonials<br>
<b>Component Use:</b> Slider that holds testimonials (which is a post type)<br>
<b>Atomic Design Level:</b> Molecule

### Props

| title             | type    | Global | Required | Description                                                                |
| ----------------- | ------- | ------ | -------- | -------------------------------------------------------------------------- |
| parent_class      | string  | yes    | yes      | CSS class of the parent component.                                         |
| version           | string  | yes    | no       | Optional version. Uses a BEM modifier.                                     |
| extra_class       | string  | yes    | no       | optional extra CSS class. Uses a BEM modifier.                             |
| add_class_on_anim | boolean | yes    | no       | Adds a CSS class when user scrolls to this component. Used for animations. |
| items             | array   | no     | yes      | Holds an image for each entry in the array.                                |

### How to add: Outside repeater:

<i>Remove props that are not applicable</i>

```
{% include '02-molecules/slider/slider-testimonials/slider-testimonials.twig' with {
	parent_class        : component_class,
	version             : 'something',
	extra_class         : 'something',
	items               : section.items,
	add_class_on_anim   : true
} only %}
```

### How to add: Inside repeater:

<i>Remove props that are not applicable</i>

```
{% include '02-molecules/slider/slider-testimonials/slider-testimonials.twig' with {
	parent_class        : component_class,
	version             : 'something',
	extra_class         : 'something',
	items               : item.items,
	add_class_on_anim   : true
} only %}
```

### How to add: Site Options:

<i>Remove props that are not applicable</i>

```
{% include '02-molecules/slider/slider-testimonials/slider-testimonials.twig' with {
	parent_class        : component_class,
	version             : 'something',
	extra_class         : 'something',
	items               : options.items,
	add_class_on_anim   : true
} only %}
```

### WordPress Data Source

####Slider Testimonials
| title | type | Description |
|-------|------|-------------|
| section.items | ACF relationship field | Holds slider entries linked to the testimonials CPT
<br>

####Slider Testimonials Children:

| title        | type        | Description       |
| ------------ | ----------- | ----------------- |
| itemtitle    | ACF title   | Testimonial Title |
| item.content | ACF WYSIWIG | WYSIWIG text      |
