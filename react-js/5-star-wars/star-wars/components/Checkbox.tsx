/** React imports */
import React from 'react';

/** Radix imports */
  /** UI */
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

/** Style/ imports */
import { CheckboxRoot, CheckboxIndicator } from '@/styles/checkbox';

/* export default function CheckBox( {option, desc} ) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '20px'}}>
        <Checkbox.Root className={CheckboxRoot({variant: option})}>
        <Checkbox.Indicator className={CheckboxIndicator()}>
            <CheckIcon style={{all: 'unset'}} />
        </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="">{desc}</label>
    </div>
  )
} */

export class CheckBox extends React.Component {
    constructor(props, option, desc) {
        super(props);
        this.state = {
            bgColor: "",
            option: option,
            desc: desc,
        };
        
    }

    boxClick = (e) => {
        this.setState({
            bgColor: "red"
        })
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: '20px'}}>
                <Checkbox.Root className={CheckboxRoot({variant: option})}>
                <Checkbox.Indicator className={CheckboxIndicator()}>
                    <CheckIcon style={{all: 'unset'}} />
                </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor="">{this.state.desc}</label>
            </div>
        )
    }
}