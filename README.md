## messageテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## userテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|name|string|null: false|
|e-mail|string|null: false, add_index unique: true|
|Password|integer|null: false|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :groups_users
- has_many :message
- has_many through: :groups_users

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|foreign_key: true|

### Association
- belongs_to :groups_users
- has_many :user
- has_many through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|ID|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
