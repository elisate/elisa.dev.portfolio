import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";

function AddProject({ handleProgram }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { images, projectTitle, projectContent, projectRep, projectLink } =
      data;
    const formData = new FormData();

    try {
      setLoading(true);
      formData.append("images", images[0]);
      formData.append("projectTitle", projectTitle);
      formData.append("projectContent", projectContent);
      formData.append("projectRep", projectRep);
      formData.append("projectLink", projectLink);

      await axios.post(
        "https://elis-dev-backend.onrender.com/project/createProject",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Notify.success("Program added successfully!");
      reset();
    } catch (error) {
      console.log(error);
      Notify.failure("Failed to add program. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[2000] bg-[rgba(50,49,49,0.5)]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl relative">
        {/* Close Icon */}
        <div className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-[#4f1930]">
          <IoClose onClick={handleProgram} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="projectTitle"
                  className="block font-semibold mb-2"
                >
                  Project Title
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  placeholder="Enter project title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  {...register("projectTitle", { required: true })}
                />
                {errors.projectTitle && (
                  <span className="text-red-500 text-sm">
                    Title is required
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="images" className="block font-semibold mb-2">
                  Project Image
                </label>
                <input
                  type="file"
                  id="images"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  {...register("images", { required: true })}
                />
                {errors.images && (
                  <span className="text-red-500 text-sm">
                    Image is required
                  </span>
                )}
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="projectRep"
                  className="block font-semibold mb-2"
                >
                  Project Representative
                </label>
                <input
                  type="text"
                  id="projectRep"
                  placeholder="Enter project representative"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  {...register("projectRep", { required: true })}
                />
                {errors.projectRep && (
                  <span className="text-red-500 text-sm">
                    Representative is required
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="projectLink"
                  className="block font-semibold mb-2"
                >
                  Project Link
                </label>
                <input
                  type="url"
                  id="projectLink"
                  placeholder="Enter project link"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  {...register("projectLink", { required: true })}
                />
                {errors.projectLink && (
                  <span className="text-red-500 text-sm">Link is required</span>
                )}
              </div>
            </div>

            {/* Full-Width Column */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="projectContent"
                className="block font-semibold mb-2"
              >
                Project Content
              </label>
              <textarea
                id="projectContent"
                placeholder="Enter project content"
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                {...register("projectContent", { required: true })}
                rows="5"
              />
              {errors.projectContent && (
                <span className="text-red-500 text-sm">
                  Content is required
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            {loading ? (
              <button
                type="button"
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] text-white rounded-md px-6 py-3 font-medium cursor-not-allowed w-full"
              >
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00C9A7] via-[#1E90FF] to-[#9A57D3] text-white rounded-md px-6 py-3 font-medium w-full hover:bg-[#4f1930] transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
