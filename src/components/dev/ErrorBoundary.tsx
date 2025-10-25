// src/components/dev/ErrorBoundary.tsx
import React from 'react';

type State = { error?: Error };
export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = {};
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <pre style={{ whiteSpace: 'pre-wrap', padding: 16, color: '#b00020' }}>
          ⚠️ 런타임 에러 발생: {this.state.error.message}
        </pre>
      );
    }
    return this.props.children;
  }
}
