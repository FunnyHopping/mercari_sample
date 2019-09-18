require 'test_helper'

class OrdercommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get ordercomments_create_url
    assert_response :success
  end

end
