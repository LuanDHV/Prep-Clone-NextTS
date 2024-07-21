import { INotificationModal } from "@/types/interfaces";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import Image from "next/image";

const NotificationModal = ({
  isOpen,
  onOpenChange,
  message,
}: INotificationModal) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"center"}>
      <ModalContent>
        {() => (
          <>
            <div className="p-5">
              <ModalHeader className="flex items-center justify-center text-3xl font-extrabold text-yellow-400">
                <Image
                  src="/imgs/courses/warning.png"
                  alt="warning"
                  width={36}
                  height={36}
                  className="mr-4 object-cover"
                />
                Lưu ý!
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
