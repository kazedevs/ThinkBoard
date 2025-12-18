import { PenSquareIcon, TrashIcon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import toast from "react-hot-toast";

const NoteCard = ({ note, onClick }) => {
    return (
        <Link
            to={`/note/${note.id}`}
            className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full group border border-base-200 overflow-hidden relative"
        >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary group-hover:w-2.5 transition-all duration-300"></div>

            <div className="card-body p-6 pl-8">
                <h2 className="card-title text-lg font-bold text-base-content tracking-tight group-hover:text-primary transition-colors">
                    {note.title}
                </h2>
                <p className="text-base-content/70 text-sm line-clamp-3 leading-relaxed mt-2">
                    {note.content}
                </p>
                <div className="card-actions justify-between items-center mt-6 pt-4 border-t border-base-100">
                    <span className="text-xs font-semibold text-base-content/40 uppercase tracking-wider">
                        {formatDate(note.createdAt)}
                    </span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <PenSquareIcon className="size-4" />
                        </div>
                        <button
                            className="btn btn-xs btn-square btn-error btn-outline"
                            onClick={(e) => {
                                e.preventDefault();
                                // placeholder logic
                            }}
                        >
                            <TrashIcon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NoteCard;
