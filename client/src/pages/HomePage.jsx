import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitUI from "../components/RateLimitUI";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";


function HomePage() {

  const [isRateLimit, setIsRateLimit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/notes");
        console.log(response.data);
        setNotes(response.data)
        setIsRateLimit(false);
      } catch (error) {
        console.log("error", error);
        if (error.response?.status === 429) {
          setIsRateLimit(true);
          toast.error("Rate limit reached. Please wait.");
        }
        else {
          toast.error("Something went wrong");
        }
      }
      finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimit && <RateLimitUI />}

      <div className="container mx-auto px-4 py-8">
        {loading && (
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {!loading && notes.length === 0 && (
          <div className="text-center text-base-content/60 py-20 bg-base-200/50 rounded-xl border border-dashed border-base-300">
            <p className="text-lg font-medium">No notes found</p>
            <p className="text-sm mt-1">Create your first note to get started!</p>
          </div>
        )}

        {notes.length > 0 && !isRateLimit && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map((note) => {
              return <NoteCard key={note.id} note={note} setNotes={setNotes} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage