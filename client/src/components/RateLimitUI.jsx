import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
    return (
        <div className="mx-auto max-w-lg px-4 py-12">
            <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-base-content/10 bg-base-200/50 p-6 text-center shadow-sm">
                <ZapIcon className="size-6 text-warning" />
                <p className="text-sm font-medium text-base-content/80">
                    Rate limit reached
                </p>
                <p className="text-xs text-base-content/60">
                    Please wait a moment and try again.
                </p>
            </div>
        </div>
    );
};

export default RateLimitedUI;