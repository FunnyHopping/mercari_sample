require 'test_helper'

class TransactsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get transacts_create_url
    assert_response :success
  end

end
