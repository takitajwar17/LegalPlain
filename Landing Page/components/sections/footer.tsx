"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Chrome, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                LegalPlain
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Making legal documents accessible and understandable for everyone.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5 text-gray-300" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5 text-gray-300" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5 text-gray-300" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1"
          >
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-gray-300 hover:text-blue-500"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-blue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1"
          >
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-blue-500"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr"
                  className="text-gray-300 hover:text-blue-500"
                >
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1"
          >
            <h3 className="font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white"
              />
              <Button type="submit" className="w-full bg-blue-600 text-white">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} LegalPlain. All rights reserved.
          </p>
          <Button variant="outline" className="group">
            <Chrome className="mr-2 h-4 w-4" />
            Add to Chrome
            <span className="ml-2 text-xs bg-blue-600/10 px-2 py-1 rounded-full group-hover:bg-blue-600/20 transition-colors">
              Free
            </span>
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}
