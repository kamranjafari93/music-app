/* eslint-disable */
// @ts-nocheck

import React from "react";
import CustomError from "@/components/Error/CustomError";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // Send to Sentry
    console.error({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return <CustomError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
