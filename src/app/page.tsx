import Link from "next/link";
import Image from "next/image";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <Image
          src="/logo.png" // Add your logo file in the public folder
          alt="New Edge Logo"
          width={50}
          height={50}
        />
        <h3 style={styles.logoText}>New Edge</h3>
        <p style={styles.subtitle}>APPLYING INNOVATION</p>
      </div>
      <nav style={styles.navMenu}>
        <ul style={styles.menuList}>
          <li style={styles.menuItem}>
            <Link href="/dashboard" style={styles.link}>
              <span style={styles.icon}>🏠</span> Dashboard
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link href="/inventory" style={styles.link}>
              <span style={styles.icon}>🔧</span> Inventory
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link href="/reports" style={styles.link}>
              <span style={styles.icon}>📊</span> Reports
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link href="/purchase-orders" style={styles.link}>
              <span style={styles.icon}>📄</span> Purchase Orders
            </Link>
          </li>
          <li style={styles.menuItem}>
            <Link href="/sales-invoice" style={styles.link}>
              <span style={styles.icon}>🧾</span> Sales Invoice
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#fff",
    borderRight: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logoText: {
    margin: "10px 0 5px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "12px",
    color: "#888",
  },
  navMenu: {
    width: "100%",
  },
  menuList: {
    listStyleType: "none",
    padding: 0,
  },
  menuItem: {
    margin: "15px 0",
    textAlign: "left",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "10px",
    fontSize: "18px",
  },
};

export default Sidebar;
