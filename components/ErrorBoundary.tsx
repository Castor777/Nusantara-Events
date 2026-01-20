import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 max-w-lg w-full">
                        <h2 className="text-red-400 text-xl font-bold mb-4">Something went wrong</h2>
                        <p className="text-slate-300 mb-4">
                            The application encountered an error. Please refresh the page to try again.
                        </p>
                        <pre className="text-xs text-red-300 bg-slate-800 p-4 rounded overflow-auto max-h-40">
                            {this.state.error?.message}
                        </pre>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 bg-mantis-600 hover:bg-mantis-500 text-white font-semibold uppercase text-xs tracking-widest py-3 px-6 rounded-xl transition-all"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
