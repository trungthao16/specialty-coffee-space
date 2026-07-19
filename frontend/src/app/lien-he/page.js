import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Liên Hệ - Specialty Coffee Space',
  description: 'Liên hệ với chúng tôi để mua sỉ/lẻ cà phê hạt specialty, đặt lịch workshop pha chế hoặc đóng góp ý kiến.',
  alternates: {
    canonical: '/lien-he',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-stone-950 min-h-screen py-16 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-700/10 px-4 py-1.5 rounded-full border border-amber-700/20">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black text-stone-100 mt-2">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-stone-400 max-w-xl mx-auto mt-2 leading-relaxed">
            Chúng tôi luôn lắng nghe mọi ý kiến và sẵn sàng đồng hành cùng bạn trên hành trình khám phá hương vị cà phê specialty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-100">Thông Tin Cửa Hàng</h2>
            <p className="text-sm leading-relaxed text-stone-400">
              Hãy ghé qua không gian của chúng tôi để cùng thưởng thức những tách Pour Over chất lượng cao được pha chế ngay tại quầy bar mở.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-amber-700/10 text-amber-500 rounded-xl h-fit border border-amber-700/25">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-200">Địa chỉ</h3>
                  <p className="text-sm mt-1 text-stone-400">123 Đường Cà Phê, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-amber-700/10 text-amber-500 rounded-xl h-fit border border-amber-700/25">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-200">Giờ làm việc</h3>
                  <p className="text-sm mt-1 text-stone-400">Thứ 2 - Thứ 6: 07:00 - 22:00</p>
                  <p className="text-sm text-stone-400">Thứ 7 - Chủ Nhật: 08:00 - 22:30</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-amber-700/10 text-amber-500 rounded-xl h-fit border border-amber-700/25">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-200">Điện thoại</h3>
                  <p className="text-sm mt-1 text-stone-400">0123 456 789</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-amber-700/10 text-amber-500 rounded-xl h-fit border border-amber-700/25">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-200">Email</h3>
                  <p className="text-sm mt-1 text-stone-400">contact@specialtycoffee.space</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-900/40 border border-stone-850 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-serif font-bold text-stone-100 mb-6">Gửi Lời Nhắn</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Họ và Tên</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Số điện thoại</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    placeholder="0901234567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Địa chỉ Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase text-stone-400 tracking-wider">Nội dung tin nhắn</label>
                <textarea
                  rows="4"
                  required
                  className="w-full bg-stone-950 border border-stone-800 focus:border-amber-700 text-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                  placeholder="Tôi muốn tìm hiểu thêm về khóa học pha chế / đặt mua sỉ..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 active:scale-99 text-stone-950 font-bold rounded-xl transition-all shadow-lg"
              >
                Gửi Lời Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
