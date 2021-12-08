# Link

<b>Component Name:</b> Link<br>
<b>Component Use:</b> Basically the same as a button (atom). Just differently styled. Links allow users to take actions, and make choices, with a single tap.<br>
<b>Atomic Design Level:</b> Atom

### Props

| title               | type    | Global | Required | Description                                                                |
| ------------------- | ------- | ------ | -------- | -------------------------------------------------------------------------- |
| parent_class        | string  | yes    | yes      | CSS class of the parent component.                                         |
| default_block_class | string  | yes    | no       | CSS class shared by all repeatable blocks.                                 |
| version             | string  | yes    | no       | Optional version. Uses a BEM modifier.                                     |
| extra_class_wrapper | string  | yes    | no       | optional extra CSS class assigned to the wrapper.                          |
| extra_class         | string  | yes    | no       | optional extra CSS class. Uses a BEM modifier.                             |
| add_class_on_anim   | boolean | yes    | no       | Adds a CSS class when user scrolls to this component. Used for animations. |
| link                | object  | no     | yes      | Contains the link label, link link and link external link.                 |

### How to add: Outside repeater:

<i>Remove props that are not applicable</i>

```
{% include '01-atoms/links/link/link.twig' with {
    parent_class    	: component_class,
    version         	: 'something'
    extra_class     	: 'something,
    link                : section.link,
    add_class_on_anim 	: false
} only %}
```

### How to add: Inside repeater:

<i>Remove props that are not applicable</i>

```
{% include '01-atoms/links/link/link.twig' with {
    parent_class    	: component_class,
    version         	: 'something',
    extra_class     	: 'something,
    link                : item.link,
    add_class_on_anim 	: false
} only %}
```

### How to add: Site Options:

<i>Remove props that are not applicable</i>

```
{% include '01-atoms/links/link/link.twig' with {
    parent_class    	: component_class,
    version         	: 'something',
    extra_class     	: 'something,
    link                : options.link,
    add_class_on_anim 	: false
} only %}

```

### WordPress Data Source

#### Link

| title                | type                            | Description                                          |
| -------------------- | ------------------------------- | ---------------------------------------------------- |
| `{{something}}`.link | ACF cloned field group (button) | Holds the link content. Title, URL, target and style |

<br>

#### Link children:

| title       | type            | Description          |
| ----------- | --------------- | -------------------- |
| link.title  | ACF link text   | Link Text            |
| link.url    | ACF link url    | Link URL             |
| link.target | ACF link target | Link open in new tab |
| link.style  | ACF select      | Various link styles  |
