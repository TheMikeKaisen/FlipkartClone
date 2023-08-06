## adding a new Collection

1. Created a new schema 'user-schema.js' in model.
   - The idea is the verify the details from the signup page to a schema. i.e. if the provided value is a string or not, or should it be unique, or if the field should be required , etc.
   - so we create a model 'user' and export it. 

2. - In the 'user-controller.js', we import User.
   - check if the username already exists or not.
        - **const exist = await User.findOne({ username: request.body.username});**

   - If it does, return an error message.
        - **if(exist){**
            **return response.status(401).json({message: 'Username already exist'});**
        **}** 

3. - create a user with the request.body, i.e. the details provided in the signup page.
        - **const user = request.body;**
   - create a newUser.
        - **const newUser = new User(user);**
          **await newUser.save();**

4. If everything works properly, respond with status 200.
4. If an error occurs,respond with status 500 and an error message.