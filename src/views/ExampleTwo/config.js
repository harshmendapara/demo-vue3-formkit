export const schema = [
  {
    $el: 'h1',
    id: 'title',
    children: 'Example 2-1 (Dynamic Field)'
  },
  {
    $formkit: 'checkbox',
    id: 'checkbox',
    options: [],
    name: 'checkbox'
  },
  {
    $formkit: 'text',
    name: 'firstname',
    label: 'First Name',
    validation: 'required'
  },
  {
    $formkit: 'text',
    name: 'lastname',
    label: 'Last Name',
    validation: 'required|email'
  },
  {
    $formkit: 'text',
    name: 'email',
    label: 'Email',
    validation: 'required|email'
  },
  {
    $formkit: 'text',
    name: 'phone',
    label: 'Phone',
    validation: 'required'
  },
  {
    $formkit: 'text',
    name: 'address',
    label: 'address',
    validation: 'required'
  },
]