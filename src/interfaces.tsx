interface TextBoxType {
    title: string,
    placeholder: string,
    type: string,
    setAction: React.ChangeEventHandler<HTMLInputElement>
}

interface ErrorMessageType {
    content: string
}

// By extending IItem with the Record<string, any> you allow an object to contain other string keys with any values along with those defined in the interface. The nice part is that you still have the autocompletion for the defined properties
interface AccountCredentials extends Record<string, string> {
    username: string,
    password: string,
}


export type { TextBoxType, ErrorMessageType, AccountCredentials }