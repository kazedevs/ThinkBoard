import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitUI from "../components/RateLimitUI";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";


function HomePage() {

  const [isRateLimit, setIsRateLimit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axiosInstance.get("/notes");
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

        {notes.length === 0 && !isRateLimit && (
          <NotesNotFound />
        )}

        {notes.length > 0 && !isRateLimit && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {notes.map((note) => {
              return <NoteCard key={note._id} note={note} setNotes={setNotes} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage