## Fetching the values from signup text fields
- onChange function tracks any changes in the textfield.

- while entering a value on signup texfield, it is replicated in the info tab from console. There is a list of content (json) in the info. Inside which there is a target property, inside which, there is a value, and value hold the content written in the textfield.

    - syntheticBaseEvent(name of the object on change) -> target -> value -> <value>
    - to access: console.log(e.target.value)

## fetching

1. created an object 'signupInitialValues' which will hold the values that are being entered.
2. created a state which would update the values on change. It takes the object 'signupInitialValues' as initial argument.
3. created an onchange function which will update the 'signupInitialValues' using setState property.

