class SnsCredential < ApplicationRecord
  belongs_to :user

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      # 元々userモデルにあったｶﾗﾑ
      user.name = auth.info.name
      user.email = auth.info.email
      return user
    end
  end
end
