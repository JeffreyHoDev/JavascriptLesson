class AuthenticationError extends Error {
    constructor(message){
        super(message);
        this.name = 'authenticationError'
        this.favouriteSnack = 'grapes'
    }
}

throw new AuthenticationError('OMG')

// Remove the throw just now first to test below code
// good practice customize error as hacker will never know instead of standard error
const a = new AuthenticationError('OMG')
a.favouriteSnack // grapes