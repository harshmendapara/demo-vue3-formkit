export const schema = [
        {
          $el: 'h1',
          children: 'Example 1-1 (Dynamic Field)'
        },
        {
          $formkit: 'text',
          name: 'email',
          label: 'Email',
          help: 'This will be used for your account.',
          validation: 'required|email'
        },
        {
          $formkit: 'select',
          name: 'state',
          label: 'States',
          placeholder: 'Select A State',
          options: [],
          validation: 'required'
        },
        {
          $formkit: 'select',
          name: 'cities',
          label: 'Cities',
          placeholder: 'Select A City',
          options: [],
          validation: 'required'
        }
      ]