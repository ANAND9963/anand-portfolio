"use client"

import { motion } from "framer-motion"
import React from "react";

export function AnimatedCard({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}   // 👈 ensures it triggers on scroll
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4"
        >
            {children}
        </motion.div>
    )
}
