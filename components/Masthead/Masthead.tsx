'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "@/styles/components/Header.module.scss";
import HeaderLogo from "@/public/images/logo@2x.png";
import BellIcon from "@/public/images/bell.svg";
import CartIcon from "@/public/images/cart-gray.svg";
import FlagGeIcon from "@/public/images/flag-ge.svg";
import UserIcon from "@/public/images/user.svg";
import ArrowDownIcon from "@/public/images/arrow-down.svg";
import { relative } from "path";
import { useStore } from '../Masthead/Masthead.store'

const Header: React.FC = () => {

  const { count } = useStore()



  const itemClass: string = headerStyles.header__rightContent__item;

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.header__leftContent}>
        <Link href={"/"}>
          <Image src={HeaderLogo} alt="logo" priority />
        </Link>
      </div>
      <div className={headerStyles.header__rightContent}>
        <div className={itemClass}>
          <Image src={BellIcon} alt="Bell icon" />
        </div>
        <div className={itemClass} style={{ position: 'relative', }}>
          <div style={{ position: 'absolute', backgroundColor: 'red', width: '20px', height: '20px', zIndex: '0', right: '-5px', top: '-5px', borderRadius: '11px', textAlign: 'center', color: '#fff', fontSize: '11px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <span style={{ alignSelf: 'center' }}>{count}</span>
          </div>
          <Image src={CartIcon} alt="Cart icon" style={{ zIndex: '1000' }} />

        </div>
        <>
          <div className={headerStyles.header__rightContent__user}>
            <div
              className={headerStyles.header__rightContent__user__leftContent}
            >
              <Image src={UserIcon} alt="User icon" />
              <span>Kancha Co.</span>
            </div>
            <div
              className={headerStyles.header__rightContent__user__rightContent}
            >
              <Image src={ArrowDownIcon} alt="Arrow down icon" />
            </div>
          </div>
        </>
        <div className={itemClass}>
          <Image src={FlagGeIcon} alt="Georgian" />
        </div>
      </div>
    </div>
  );
};

export default Header;
