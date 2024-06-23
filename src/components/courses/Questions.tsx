"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function Questions() {
  return (
    <div className="rounded-3xl bg-blue-50 px-5 py-12 md:px-10">
      <div className="mb-10 text-center">
        <p className="text-2xl font-bold">
          <span className="text-[#0071F9]">Câu Hỏi</span> Thường Gặp !
        </p>
        <p className="text-gray-800">
          Cùng Prep giải đáp những thắc mắc của bạn nhé !
        </p>
      </div>
      <div className="mx-auto w-full md:w-3/5">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            title="Thông tin thanh toán"
            className="my-4 grid items-center rounded-xl bg-white px-4 font-bold md:rounded-3xl"
          >
            <div className="px-5">
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                1. Thông tin của tôi có được bảo mật khi thanh toán online
                không?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Toàn bộ thông tin giao dịch, bao gồm thông tin thẻ ATM của bạn
                được bảo mật tuyệt đối bởi trung gian thanh toán online được
                Ngân hàng Nhà nước Việt Nam cấp phép.
              </p>
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                2. Tôi có thể thanh toán qua chuyển khoản ngân hàng không?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Prep chấp nhận hình thức Chuyển khoản qua cổng thanh toán 9Pay,
                bạn chỉ cần làm theo các hướng dẫn chuyển khoản khi chọn hình
                thức thanh toán này. Nếu bạn chuyển khoản thành công qua cổng
                thanh toán 9Pay, chương trình sẽ được tự động thêm vào tài khoản
                của bạn. Nếu gặp khó khăn trong thanh toán, bạn vui lòng liên hệ
                ngay với bộ phận chăm sóc khách hàng qua:
                <p>- Hotline: 0907 04 88 99</p>
                <Link href="" className="text-[#1479F4]">
                  - Email: support@prep.vn
                </Link>
              </p>
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                3. Cách thanh toán qua ATM Internet Banking/ thẻ
                VISA/MasterCard/ Paypal?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Với các hình thức Internet Banking, Visa, Master, bạn vui lòng
                chọn cổng thanh toán OnePay khi thanh toán. Tất cả các thông tin
                thẻ của bạn được bảo mật tuyệt đối bởi OnePay - Trung gian giao
                dịch do Ngân hàng nhà nước cấp phép. Nếu bạn muốn thanh toán
                bằng PayPal, vui lòng liên hệ với bộ phận chăm sóc khách hàng
                qua:
                <p>- Hotline: 0907 04 88 99</p>
                <Link href="" className="text-[#1479F4]">
                  - Email: support@prep.vn
                </Link>
              </p>
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                4. Cách thanh toán qua QR pay?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Quý khách có thể sử dụng ứng dụng Mobile Banking của gần 30 ngân
                hàng khách nhau hoặc các ứng dụng khác như VinID, VNPay, mPay để
                quét mã QR và tiến hành thanh toán nhanh chóng.
              </p>
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                5. Tôi có nhận được xác nhận thanh toán thành công không?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Sau khi thực hiện việc thanh toán, học viên sẽ nhận được thông
                báo thanh toán thành công và khóa học được đăng ký sẽ tự động mở
                khóa trên tài khoản tại
                <Link href="#" className="ml-1 text-[#1155CC]">
                  Prep.vn
                </Link>
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            key="2"
            title="Hướng dẫn học hiệu quả"
            className="my-4 grid items-center rounded-xl bg-white px-4 font-bold md:rounded-3xl"
          >
            <div className="px-5">
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                1. Có nhất định phải theo lộ trình học Prep đưa ra không?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Lộ trình học cùng Study plan chi tiết đến từng ngày là lộ trình
                học TỐI ƯU NHẤT, HIỆU QUẢ NHẤT giúp bạn chinh phục được đúng mục
                tiêu đã đề ra. Tuy nhiên, các bạn hoàn toàn có thể chủ động sắp
                xếp và thay đổi thời gian để có lộ trình học và luyện tập phù
                hợp với kế hoạch riêng.
              </p>
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                2. Có cần dùng thêm tài liệu ngoài khi học Prep không ?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                KHÔNG. Các bạn chỉ cần học tất cá trên một nền tảng Prep.vn theo
                lộ trình được xây dựng phù hợp với bạn bởi: Không cần sách vở,
                tài liệu bản cứng đi kèm Sử dụng bài giảng quay dựng chi tiết,
                kèm minh họa trực quan sinh động, dễ hiểu. Hệ thống bài tập, bài
                thực hành, bài test được nghiên cứu kỹ lưỡng, đánh giá đúng năng
                lực theo đúng giai đoạn học của bạn. Tài liệu tham khảo, bổ trợ,
                Tips luyện tập ( có thể sử dụng nhưng không bắt buộc) đều trên
                cùng hệ thống Prep.vn giúp bạn dễ dàng quản lý và theo dõi mà
                không mất công tìm kiếm và lưu trữ. Ngoài học chương trình của
                từng khóa, bạn có thể sử dụng các gói dịch vụ để luyện tập thêm
                đầy đủ 4 kỹ năng: Listening, Speaking, Reading, Writing, luyện
                làm đề hiệu quả cùng trên một nền tảng Prep.vn
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            key="3"
            title="Học online có được tương tác với giáo viên không"
            className="my-4 grid items-center rounded-xl bg-white px-4 font-bold md:rounded-3xl"
          >
            <div className="px-5">
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                1. Có được tương tác với giáo viên chấm bài không?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                CÓ. Bạn được tương tác trực tiếp với giáo viên chấm bài và trao
                đổi, tháo gỡ mọi vấn đề bạn chưa hiểu trong bài. Giáo viên sẽ
                phản hồi ngay sau khi tiếp nhận câu hỏi của bạn trong vòng 24h.
                Bạn có thời gian 3 ngày để trao đổi với giáo viên về 1 bài chấm.
                Hãy tận dụng tối đa để tháo gỡ và học được thật nhiều từ một bài
                chấm nhé.
              </p>
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                2. Có được tương tác với giáo viên giảng dạy không?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Prep thường xuyên tổ chức các chương trình Workshop và trao đổi,
                hỗ trợ học viên trong group học thuật Prep Community. Trở thành
                học viên tại Prep sẽ được tham gia các chương trình và nhận được
                sự hỗ trợ giải đáp học thuật từ phía thầy cô.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            key="4"
            title="Quy định về việc sử dụng tài khoản"
            className="my-4 grid items-center rounded-xl bg-white px-4 font-bold md:rounded-3xl"
          >
            <div className="px-5">
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                1. Có hạn chế số thiết bị đăng nhập tài khoản Prep ?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                Có ! Nhằm giúp bạn học có thể tiện lợi học mọi lúc, mọi nơi,
                Prep hỗ trợ bạn đăng nhập và sử dụng tài khoản trên
                <strong className=""> tối đa 3 thiết bị</strong> . Để đảm bảo an
                toàn và bảo mật tài khoản cho bạn, nếu Prep phát hiện tài khoản
                đăng nhập quá số thiết bị hỗ trợ, hệ thống sẽ nhắc nhở và sau đó
                sẽ tự động khóa tài khoản nếu tiếp tục phát hiện hành vi cố tình
                vi phạm Bạn dùng lưu ý giữ bảo mật tài khoản học của chính mình
                để bảo toàn mọi quyền lợi. Tuân thủ
                <strong> Điều kiện, điều khoản giao dịch</strong> đã công bố
                trên Website Prep.vn
              </p>
              <h4 className="mb-3 mt-2 font-medium text-gray-800">
                2. Dùng chung tài khoản Prep có ảnh hưởng gì ?
              </h4>
              <p className="mb-7 pl-5 font-normal text-gray-600">
                - Theo Điều kiện và điều khoản giao dịch được công bố trên
                Website, Prep nghiêm cấm mọi hành vi liên quan đến sang nhượng,
                dùng chung tài khoản học. - Những tài khoản dùng chung, sang
                nhượng sẽ được hệ thống tự động khóa. Vì vậy, để đảm bảo quyền
                lợi của chính mình, các bạn hãy giữ bảo mật thông tin tài khoản
                khi hệ thống nhắc nhở việc phát hiện thông tin đăng nhập trên
                nhiều thiết bị. - Ngoài việc khóa tài khoản dùng chung, toàn bộ
                quyền lợi đặc biệt như chấm chữa Writing, Speaking và trao đổi
                với giáo viên các bạn sẽ không thể sử dụng lại. Một tài khoản
                chỉ có thể cá nhân hóa với một người học duy nhất, theo sát tiến
                độ học và phân tích sự tiến bộ của một người học duy nhất. - Các
                bạn hãy cảnh giác với những hình thức mua bán, sang nhượng, dùng
                chung tài khoản để đảm bảo được hưởng trọn vẹn quyền lợi học tập
                tốt nhất mà Prep mang tới. - Nếu bạn là nạn nhân của việc mua
                chung tài khoản khi chưa nắm dược những tác hại này, hãy liên hệ
                Prep để được hỗ trợ: 0931 42 8899
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
