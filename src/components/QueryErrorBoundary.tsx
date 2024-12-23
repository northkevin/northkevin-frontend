import React from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class QueryErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  render() {
    const { reset } = useQueryErrorResetBoundary();

    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8">
          <h2 className="text-xl font-semibold text-red-400 mb-4">
            Something went wrong fetching the data
          </h2>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              reset();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg 
                     hover:bg-blue-600 transition-colors"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
