import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <div>
            <Link href={'/'} className={p==='/'? "btn btn-primary":"btn"}>Home</Link>
            <Link href={'/about'} className={p==='/about'? "btn btn-primary":"btn"}>About</Link>
            <Link href={'/career'} className={p==='/carrer'? "btn btn-primary":"btn"}>Career</Link>
        </div>
    );
};

export default NavLink;