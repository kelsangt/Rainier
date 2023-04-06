class User < ApplicationRecord
  has_secure_password

  before_validation :ensure_session_token

  validates :email, :session_token, presence: true, uniqueness: true
  validates :name, presence: true 
  validates :email, length: { in: 3..255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 6..255 }, allow_nil: true

  def self.find_by_credentials(credential, password)
    if URI::MailTo::EMAIL_REGEXP.match(credential)
      user = User.find_by(email: credential)
    end 

    if user && user.authenticate(password)
      return user 
    else 
      return nil 
    end 
  end 

  def reset_session_token! 
    self.session_token = generate_unique_session_token
    self.save! 
    return session_token  
  end 



  private 

  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64 
    end 
    return token 
  end 

  def ensure_session_token
    if self.session_token === nil
      self.session_token = generate_unique_session_token 
    end 
  end 


end
