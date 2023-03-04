/** React imports */
import React from 'react';

/** Style/ imports */
import { globalStyles } from '@/styles/globals';

/** Components Imports */
import CheckBox from '@/components/Checkbox';

export default function Home() {
  globalStyles();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox option='light' desc='Light Side'/>
        <CheckBox option='dark' desc='Dark Side'/>
      </div>
    </>
  )
}
