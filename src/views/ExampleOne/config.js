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

export const dummyData = {
  data: [
    {
      value: 1,
      label: "Gujarat",
      cities: ["junagadh", "Ahmedabad", "Surat", "Rajkot", "Morbi", "Manavadar", "Bhavnagar", "Jamnagar"]
    },
    {
      value: 2,
      label: "Maharashtra",
      cities: ["Pune", "Mumbai", "Nasik", "Nagpur", "Thane", "Kalyan-Dombivali", "Vasai-Virar"]
    },
    {
      value: 3,
      label: "Uttar Pradesh",
      cities: ["Loni", "Jhansi", "Puducherry", "Nellore", "Jammu"]
    }
  ]
}
