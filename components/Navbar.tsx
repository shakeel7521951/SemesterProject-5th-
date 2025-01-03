'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <header className="w-100 z-3 bg-transparent">
            <nav className="d-flex justify-content-between align-items-center px-md-10 px-sm-5">
                <Link href="/">
                    <Image src="/logo.png" width={118} height={100} alt="Lusail Number Plates Logo" />
                </Link>
                <div className="d-flex gap-5 fs-6 navlinks">
                    <Link href="/normal">Normal</Link>
                    <Link href="/silver">Silver</Link>
                    <Link href="/gold">Gold</Link>
                    <Link href="/vip">VIP</Link>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="dark" onClick={() => router.push('/login')}>
                        Sign In
                    </Button>
                    <Button variant="light" onClick={() => router.push('/signup')}>Sign Up</Button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
