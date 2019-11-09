|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|body|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :group
- belongs_to :group

## userテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|
|name|string|null: false|
|e-mail|string|null: false, add_index unique: true|
|Password|integer|null: false|
### Association
- belongs_to :groups_users
- has_many :message
- has_many groups,through :groups_users

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|message_id|string|null: false, foreign_key: true|
|name|string|null: false|

### Association
- belongs_to :group,:user

- has_many :users,through: :groups_users
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- has_many :group,:user
- belongs_to :group
- belongs_to :user