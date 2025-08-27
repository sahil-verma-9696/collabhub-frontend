import React, { use, useContext, useState } from "react";
import { DateInput, TitleInput } from "../ui/my-Input";
import { DescriptionInput } from "../ui/my-textArea";
import { StatusSelect } from "../ui/my-select";
import { AddBtn, CloseBtn } from "../ui/my-button";
import { LIMIT } from "../../data/constants";
import LocalStorageContext from "../../context/LocalStorage";
import { toasterContext } from "../../context/Toaster";
import { createTask, editTask } from "../../utils/Task";
import { Calendar, Tag, TimerIcon } from "lucide-react";
import LabelFrom from "./Label";
import { createAndValidate } from "../../entities/utils/createAndValidate";
import { TaskSchema } from "../../entities/schema/task.schema";
import { useParams } from "react-router-dom";

export default function TaskForm({
  closeForm,
  defaultStatus,
  isEdit = false,
  oldTask,
}) {
  const { showToast } = useContext(toasterContext);
  const { statuses, labels, setTasks, setModules } =
    useContext(LocalStorageContext);
  const [taskInput, setTaskInput] = useState({
    title: isEdit ? oldTask.title : "",
    description: isEdit ? oldTask.description : "",
    status: isEdit ? oldTask.status : defaultStatus,
    dueDate: isEdit ? oldTask.dueDate : "",
    labels: isEdit ? oldTask.labels : [],
  });

  const [showLabelFrom, setShowLabelFrom] = useState(false);

  const params = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    isEdit
      ? editTask(setTasks, showToast, taskInput, oldTask)
      : createAndValidate(TaskSchema, (task) => {
          task.title = taskInput.title;
          task.description = taskInput.description;
          task.status = taskInput.status;
          task.dueDate = taskInput.dueDate;
          task.labels = taskInput.labels;

          if (params.moduleId) {
            setModules((modules) => {
              return modules.map((module) => {
                if (module.id === params.moduleId) {
                  return {
                    ...module,
                    tasks: [task.id, ...module.tasks],
                  };
                }
                return module;
              });
            });
          }
          createTask(setTasks, showToast, task);
        });
  }

  function handleLabelChange() {
    return (e, label) => {
      e.target.checked
        ? setTaskInput((prev) => {
            return { ...prev, labels: [...prev.labels, label] };
          })
        : setTaskInput((prev) => {
            return {
              ...prev,
              labels: [...prev.labels.filter((t) => t.title != label.title)],
            };
          });
    };
  }

  function handleDescriptionChange() {
    return (e) => {
      setTaskInput((prev) => {
        return { ...prev, description: e.target.value };
      });
    };
  }

  return (
    <div
      onClick={closeForm}
      className="fixed inset-0 bg-opacity-30 flex items-center justify-center z-50"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white dark:bg-[#121316] dark:text-white p-6 rounded-xl shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-2 text-center">
          {isEdit ? "Update Task" : "Create Task"}
        </h2>

        <div className="flex flex-col gap-2">
          <TitleInput
            value={taskInput.title}
            onChange={(e) => {
              setTaskInput((prev) => {
                return { ...prev, title: e.target.value };
              });
            }}
            maxLength={LIMIT.TASK_TITLE}
          />
          <span className="text-sm opacity-45">{`${taskInput.title.length}/${LIMIT.TASK_TITLE}`}</span>

          <StatusSelect
            onChange={(e) => {
              setTaskInput((prev) => {
                return { ...prev, status: e.target.value };
              });
            }}
            value={taskInput.status}
            statuses={statuses}
            defaultValue={defaultStatus}
          />
          {showLabelFrom && (
            <LabelFrom
              allLabels={labels}
              selectedLabels={taskInput.labels}
              onChange={handleLabelChange()}
              closeForm={setShowLabelFrom}
            />
          )}
          <DescriptionInput
            value={taskInput.description}
            onChange={handleDescriptionChange()}
            maxLength={LIMIT.TASK_DESCRIPTION}
          />
          <span className="text-sm opacity-45">{`${taskInput.description.length}/${LIMIT.TASK_DESCRIPTION}`}</span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowLabelFrom(true)}
            className="flex cursor-pointer items-center justify-center gap-1 px-2 py-1 text-sm border border-dashed border-gray-500 rounded-md text-white dark:bg-[#0f0f0f] hover:border-white hover:bg-gray-900 transition-colors duration-200"
          >
            <Tag size={14} strokeWidth={2} />
            <span className="text-xs">Labels</span>
          </button>
          <DateInput
            value={taskInput.dueDate?.slice(0, 10) || ""}
            onClick={(e) => {
              e.target.showPicker();
            }}
            onChange={(e) => {
              setTaskInput((prev) => {
                return {
                  ...prev,
                  dueDate: new Date(e.target.value).toISOString() || "",
                };
              });
            }}
          />

          {/* <button
            type="button"
            onClick={() => setShowLabelFrom(true)}
            className="flex cursor-pointer items-center justify-center gap-1 px-2 py-1 text-sm border border-dashed border-gray-500 rounded-md text-white dark:bg-[#0f0f0f] hover:border-white hover:bg-gray-900 transition-colors duration-200"
          >
            <TimerIcon size={14} strokeWidth={2} />
            <span className="text-xs">Status</span>
          </button> */}
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <CloseBtn label="Close" onClick={closeForm} />
          <AddBtn label="Save" />
        </div>
      </form>
    </div>
  );
}
