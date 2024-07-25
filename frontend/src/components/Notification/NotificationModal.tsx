import { INotificationModal } from "@/types/interfaces";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import Image from "next/image";

const NotificationModal = ({
  type,
  isOpen,
  onOpenChange,
  message,
}: INotificationModal) => {
  let textColor = "";
  let iconSrc = "";
  let title = "";

  if (type === "success") {
    textColor = "text-green-400";
    iconSrc = "/imgs/courses/success.png";
    title = "Thành công!";
  } else if (type === "error") {
    textColor = "text-yellow-400";
    iconSrc = "/imgs/courses/warning.png";
    title = "Lưu Ý!";
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
      <ModalContent>
        {() => (
          <>
            <div className="p-5">
              <ModalHeader
                className={`flex items-center justify-center text-3xl font-extrabold ${textColor}`}
              >
                <Image
                  src={iconSrc}
                  alt="notification-icon"
                  width={36}
                  height={36}
                  className="mr-4 object-cover"
                />
                {title}
              </ModalHeader>
              <ModalBody>
                <p className="text-center">{message}</p>
              </ModalBody>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default NotificationModal;
