import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { ChangeEventHandler, MouseEventHandler } from 'react';
interface OnChangeHandler {
    setAction: ChangeEventHandler<HTMLInputElement>
}

interface OnClickHandler {
    setAction: MouseEventHandler<HTMLInputElement>
}

interface TableModalHandler {
    setTradeAction: MouseEventHandler<HTMLTableRowElement>
}

interface TradeActionProps extends OnClickHandler, TableModalHandler {
}

interface TextBoxType extends OnChangeHandler {
    title: string,
    placeholder: string,
    type: string,
    value?: string,
    autoFocus?: boolean
}

interface ErrorMessageType {
    content: string
}

// By extending IItem with the Record<string, any> you allow an object to contain other string keys with any values along with those defined in the interface. The nice part is that you still have the autocompletion for the defined properties
interface AccountCredentials extends Record<string, string> {
    username: string,
    password: string,
}

interface UserDetails extends AccountCredentials {
    name: string,
    email: string,
    phone: string,
    confirm_password: string,
}

interface RegisterDetails extends OnChangeHandler {
    parent: AccountCredentials & UserDetails
}

interface NavBarProps extends MuiAppBarProps {
    setAction: MouseEventHandler<HTMLAnchorElement>,
    open?: boolean;
}

interface PriceProps {
    instrument: string,
    buy: number,
    sell: number,
    pips: number
}

interface LoadingType {
    load: boolean,
    timer: number
}

interface ModalProps extends OnClickHandler {
    modalStatus: boolean
}

export type { TextBoxType, ErrorMessageType, AccountCredentials, UserDetails, OnChangeHandler, RegisterDetails, NavBarProps, PriceProps, LoadingType, ModalProps, OnClickHandler, TradeActionProps, TableModalHandler }